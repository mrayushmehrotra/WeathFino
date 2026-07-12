"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Calculator,
  Calendar,
  IndianRupeeIcon,
  Percent,
  RotateCw,
  Download,
} from "lucide-react";
import Chart from "chart.js/auto";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App({ fromHex = "#2563EB", toHex = "#4F46E5" }) {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanYears, setLoanYears] = useState(20);
  const [interestRate, setInterestRate] = useState(7.5);
  const [emiDetails, setEmiDetails] = useState(null);
  const [yearlyData, setYearlyData] = useState([]);

  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartInstance = useRef(null);
  const pieChartInstance = useRef(null);

  const calculateEMI = () => {
    const principal = loanAmount;
    const annualRate = interestRate;
    const tenureMonths = loanYears * 12;
    const monthlyRate = annualRate / 12 / 100;

    const emi =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    const totalPayment = emi * tenureMonths;
    const totalInterest = totalPayment - principal;

    const yearly = [];
    let balance = principal;
    for (let year = 1; year <= loanYears; year++) {
      const months = Math.min(12, tenureMonths - (year - 1) * 12);
      let interestPaid = 0;
      let principalPaid = 0;
      for (let m = 0; m < months; m++) {
        const interest = balance * monthlyRate;
        const principalPart = emi - interest;
        interestPaid += interest;
        principalPaid += principalPart;
        balance -= principalPart;
      }
      yearly.push({
        year,
        principalPaid,
        interestPaid,
        balance: balance < 0 ? 0 : balance,
      });
    }

    setEmiDetails({
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    });

    setYearlyData(yearly);
  };

  const resetForm = () => {
    setLoanAmount(1000000);
    setLoanYears(20);
    setInterestRate(7.5);
  };

  const createLineChart = () => {
    if (lineChartInstance.current) lineChartInstance.current.destroy();
    if (!yearlyData.length) return;

    const ctx = lineChartRef.current.getContext("2d");
    lineChartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: yearlyData.map((d) => `Year ${d.year}`),
        datasets: [
          {
            label: "Principal Paid",
            data: yearlyData.map((d) => d.principalPaid),
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Interest Paid",
            data: yearlyData.map((d) => d.interestPaid),
            borderColor: "#EF4444",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: (context) =>
                context.dataset.label +
                ": ₹" +
                context.parsed.y.toLocaleString("en-IN"),
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) =>
                "₹" + (value / 100000).toFixed(1) + "L",
            },
          },
        },
      },
    });
  };

  const createPieChart = () => {
    if (pieChartInstance.current) pieChartInstance.current.destroy();
    if (!emiDetails) return;

    const ctx = pieChartRef.current.getContext("2d");
    pieChartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Principal", "Interest"],
        datasets: [
          {
            data: [loanAmount, emiDetails.totalInterest],
            backgroundColor: ["#3B82F6", "#EF4444"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const total = context.dataset.data.reduce(
                  (a, b) => a + b,
                  0
                );
                const percent = (
                  (context.parsed / total) *
                  100
                ).toFixed(1);
                return `${context.label}: ₹${context.parsed.toLocaleString(
                  "en-IN"
                )} (${percent}%)`;
              },
            },
          },
        },
        cutout: "60%",
      },
    });
  };

  useEffect(() => {
    if (loanAmount && loanYears && interestRate) calculateEMI();
  }, [loanAmount, loanYears, interestRate]);

  useEffect(() => {
    if (yearlyData.length) createLineChart();
  }, [yearlyData]);

  useEffect(() => {
    if (emiDetails) createPieChart();
  }, [emiDetails]);

  useEffect(() => {
    return () => {
      if (lineChartInstance.current) lineChartInstance.current.destroy();
      if (pieChartInstance.current) pieChartInstance.current.destroy();
    };
  }, []);

  const exportToPDF = async () => {
    const element = document.getElementById("export-content");
    if (!element) return;

    try {
      const [logoBase64, playStoreBase64] = await Promise.all([
        fetch("/WealthFino_Logo.png").then(res => res.blob()).then(blob => new Promise(resolve => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        })).catch(() => "/WealthFino_Logo.png"),
        fetch("/google_play_badge.png").then(res => res.blob()).then(blob => new Promise(resolve => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        })).catch(() => "/google_play_badge.png")
      ]);

      const isDark = document.documentElement.classList.contains("dark");
      const canvas = await html2canvas(element, { 
        scale: 2,
        backgroundColor: isDark ? "#030712" : "#f8fafc",
                        onclone: (clonedDoc) => {
          const isDark = document.documentElement.classList.contains("dark");
          const exportElement = clonedDoc.getElementById("export-content");
          
          exportElement.style.padding = "24px";
          
          const header = clonedDoc.createElement("div");
          header.style.display = "flex";
          header.style.width = "100%";
          header.style.justifyContent = "space-between";
          header.style.alignItems = "center";
          header.style.marginBottom = "32px";
          header.style.padding = "0 10px";
          
          const logo = clonedDoc.createElement("img");
          logo.src = logoBase64;
          logo.style.height = "50px";
          logo.style.objectFit = "contain";
          
          const playStore = clonedDoc.createElement("img");
          playStore.src = playStoreBase64;
          playStore.style.height = "40px";
          playStore.style.objectFit = "contain";
          
          header.appendChild(logo);
          header.appendChild(playStore);
          
          exportElement.insertBefore(header, exportElement.firstChild);

          const footer = clonedDoc.createElement("div");
          footer.style.marginTop = "40px";
          footer.style.padding = "20px";
          footer.style.borderRadius = "12px";
          footer.style.border = isDark ? "1px solid #374151" : "1px solid #e5e7eb";
          footer.style.backgroundColor = isDark ? "#111827" : "#ffffff";
          footer.style.textAlign = "center";
          
          const footerTitle = clonedDoc.createElement("h4");
          footerTitle.innerText = "Important Disclaimer";
          footerTitle.style.fontWeight = "bold";
          footerTitle.style.fontSize = "16px";
          footerTitle.style.color = isDark ? "#ffffff" : "#000000";
          footerTitle.style.marginBottom = "10px";
          
          const footerText = clonedDoc.createElement("p");
          footerText.innerHTML = "Investment in securities market is subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, enlistment as RA with Exchange and certification from National Institute of Securities Markets (NISM) in no way guarantee performance of the intermediary or provide any assurance of returns to investors.<br/><br/>For detailed Terms &amp; Conditions, Disclosures, SEBI Disclosures, Client Consent, Privacy Policy, and other regulatory information, kindly visit www.krishnapathak.com.";
          footerText.style.fontSize = "12px";
          footerText.style.color = isDark ? "#9ca3af" : "#4b5563";
          footerText.style.lineHeight = "1.5";
          
          
          const appText = clonedDoc.createElement("p");
          appText.innerText = "Get our App: https://play.google.com/store/apps/details?id=com.wealthfino.mobile";
          appText.style.fontSize = "12px";
          appText.style.fontWeight = "bold";
          appText.style.marginTop = "12px";
          appText.style.color = "#3b82f6";
          
          footer.appendChild(footerTitle);
          footer.appendChild(footerText);
          footer.appendChild(appText);
          
          exportElement.appendChild(footer);
        },
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      let imgWidth = pdfWidth;
      let imgHeight = (canvas.height * pdfWidth) / canvas.width;
      let x = 0;
      let y = 0;
      
      if (imgHeight > pageHeight) {
        imgHeight = pageHeight - 10;
        imgWidth = (canvas.width * imgHeight) / canvas.height;
        x = (pdfWidth - imgWidth) / 2;
        y = 5;
      }

      pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      
      const scaleFactor = imgWidth / pdfWidth;
      const linkWidth = 45 * scaleFactor;
      const linkHeight = 15 * scaleFactor;
      const linkX = x + imgWidth - linkWidth - (5 * scaleFactor);
      const linkY = y + (5 * scaleFactor);
      
      pdf.link(linkX, linkY, linkWidth, linkHeight, { url: 'https://play.google.com/store/apps/details?id=com.wealthfino.mobile' });
      
      pdf.save("WealthFino_EMI_Calculation.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const formatCurrency = (amount) =>
    "₹" + amount.toLocaleString("en-IN");

  const sanitizeInput = (value) => {
    const cleaned = value.replace(/^0+/, "");
    return cleaned === "" ? 0 : Number(cleaned);
  };

  return (
  <div className=" bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto py-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 calc-gradient-bg rounded-2xl mb-5 shadow-lg">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            EMI Calculator
          </h1>
          <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate your Loan EMI, Total Interest, and visualize amortization
            over time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 ring-2 calc-ring calc-ring-offset">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <IndianRupeeIcon className="w-5 h-5 mr-2 calc-text" />
                  Loan Details
                </h2>
                <button
                  onClick={resetForm}
                  className="flex items-center calc-text text-sm hover:underline"
                >
                  <RotateCw className="w-4 h-4 mr-1" />
                  Reset
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    min="10000"
                    max="50000000"
                    step="10000"
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setLoanAmount("");
                      } else {
                        setLoanAmount(Number(value));
                      }
                    }}
                    className="w-full text-black dark:text-white px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-lg"
                  />
                  <input
                    type="range"
                    min="10000"
                    max="50000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) =>
                      setLoanAmount(Number(e.target.value))
                    }
                    className="w-full mt-2 h-2 calc-slider-bg rounded-lg appearance-none cursor-pointer calc-accent"
                  />
                </div>

                <div>
                  <label className="flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    Loan Tenure (Years)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="40"
                    value={loanYears}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setLoanYears("");
                      } else {
                        setLoanYears(Number(value));
                      }
                    }}
                    className="w-full text-black dark:text-white px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-lg"
                  />
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={loanYears}
                    onChange={(e) =>
                      setLoanYears(Number(e.target.value))
                    }
                    className="w-full mt-2 h-2 calc-slider-bg rounded-lg appearance-none cursor-pointer calc-accent"
                  />
                </div>

                <div>
                  <label className="flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Percent className="w-4 h-4 mr-1" />
                    Annual Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="40"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setInterestRate("");
                      } else {
                        setInterestRate(Number(value));
                      }
                    }}
                    className="w-full text-black dark:text-white px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-lg"
                  />
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(Number(e.target.value))
                    }
                    className="w-full mt-2 h-2 calc-slider-bg rounded-lg appearance-none cursor-pointer calc-accent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {emiDetails && (
              <div className="flex flex-col gap-6">
                <div className="flex justify-end">
                  <button
                    onClick={exportToPDF}
                    className="flex items-center text-white calc-gradient-bg px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export as PDF
                  </button>
                </div>
                <div id="export-content" className="space-y-6 bg-transparent rounded-xl">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ring-2 calc-ring">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Monthly EMI</p>
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">
                      {formatCurrency(emiDetails.emi)}
                    </h3>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ring-2 calc-ring">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Total Payment</p>
                    <h3 className="text-xl font-bold text-green-700 dark:text-green-400">
                      {formatCurrency(emiDetails.totalPayment)}
                    </h3>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ring-2 calc-ring">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Total Interest</p>
                    <h3 className="text-xl font-bold text-red-700 dark:text-red-400">
                      {formatCurrency(emiDetails.totalInterest)}
                    </h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ring-2 calc-ring">
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Amortization Chart</h3>
                    <div className="h-64 sm:h-80 w-full max-w-full overflow-hidden">
                      <canvas ref={lineChartRef} className="w-full max-w-full"></canvas>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ring-2 calc-ring">
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Payment Breakdown</h3>
                    <div className="h-64 sm:h-80 w-full max-w-full overflow-hidden">
                      <canvas ref={pieChartRef} className="w-full max-w-full"></canvas>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
