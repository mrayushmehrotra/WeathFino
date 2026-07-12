"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calculator, IndianRupee, RotateCw, Download } from "lucide-react";
import Chart from "chart.js/auto";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function NetWorthCalculator({ fromHex = "#8B5CF6", toHex = "#7C3AED" }) {
  const [assets, setAssets] = useState({
    cash: "",
    realEstate: "",
    investments: "",
    vehicles: "",
    business: "",
    gold: "",
  });

  const [liabilities, setLiabilities] = useState({
    homeLoan: "",
    carLoan: "",
    creditCard: "",
    personalLoan: "",
  });

  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const doughnutChartInstance = useRef(null);

  const sanitize = (val) =>
    val.replace(/[^0-9.]/g, "").replace(/^0+(?=\d)/, "").replace(/^(\.)/, "0.");

  const handleAssetChange = (key, value) => {
    setAssets({ ...assets, [key]: sanitize(value) });
  };

  const handleLiabilityChange = (key, value) => {
    setLiabilities({ ...liabilities, [key]: sanitize(value) });
  };

  const parse = (val) => parseFloat(val) || 0;

  const reset = () => {
    setAssets({
      cash: "",
      realEstate: "",
      investments: "",
      vehicles: "",
      business: "",
      gold: "",
    });
    setLiabilities({
      homeLoan: "",
      carLoan: "",
      creditCard: "",
      personalLoan: "",
    });
  };

  const totalAssets =
    parse(assets.cash) +
    parse(assets.realEstate) +
    parse(assets.investments) +
    parse(assets.vehicles) +
    parse(assets.business) +
    parse(assets.gold);

  const totalLiabilities =
    parse(liabilities.homeLoan) +
    parse(liabilities.carLoan) +
    parse(liabilities.creditCard) +
    parse(liabilities.personalLoan);

  const netWorth = totalAssets - totalLiabilities;

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
      
      pdf.save("WealthFino_Net_Worth.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };


  const renderCharts = () => {
    if (barChartInstance.current) barChartInstance.current.destroy();
    if (doughnutChartInstance.current) doughnutChartInstance.current.destroy();

    if (totalAssets === 0 && totalLiabilities === 0) return;

    barChartInstance.current = new Chart(barChartRef.current, {
      type: "bar",
      data: {
        labels: ["Assets", "Liabilities"],
        datasets: [
          {
            label: "Amount",
            data: [totalAssets, totalLiabilities],
            backgroundColor: [fromHex, "#EF4444"],
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: ₹${ctx.parsed.y}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => "₹" + value,
            },
          },
        },
      },
    });

    doughnutChartInstance.current = new Chart(doughnutChartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Assets", "Liabilities"],
        datasets: [
          {
            data: [totalAssets, totalLiabilities],
            backgroundColor: [fromHex, "#F87171"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: "65%",
        plugins: {
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const total = totalAssets + totalLiabilities;
                const percent = total > 0 ? ((ctx.parsed / total) * 100).toFixed(1) : 0;
                return `${ctx.label}: ₹${ctx.parsed} (${percent}%)`;
              },
            },
          },
          legend: { display: false },
        },
      },
    });
  };

  useEffect(() => {
    renderCharts();
  }, [assets, liabilities]);

  useEffect(() => {
    return () => {
      if (barChartInstance.current) barChartInstance.current.destroy();
      if (doughnutChartInstance.current) doughnutChartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-100 via-emerald-100 to-blue-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 calc-gradient-bg rounded-2xl mb-5 shadow-xl animate-pulse">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            Net Worth Calculator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Track your personal finances effortlessly – assets vs liabilities in a glance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/90 rounded-3xl shadow-2xl p-6 sm:p-8 ring-2 calc-ring calc-ring-offset transition hover:scale-[1.01] duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <IndianRupee className="w-5 h-5 mr-2 calc-text" />
                Your Financial Details
              </h2>
              <button
                onClick={reset}
                className="flex items-center calc-text text-sm hover:underline hover:opacity-80 transition"
              >
                <RotateCw className="w-4 h-4 mr-1" />
                Reset
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-md font-medium text-green-700 dark:text-green-400 mb-2">Assets</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Cash & Bank Balances", key: "cash" },
                  { label: "Real Estate (home or property)", key: "realEstate" },
                  { label: "Investments(stocks, mutual funds)", key: "investments" },
                  { label: "Vehicles (market value)", key: "vehicles" },
                  { label: "Business/Other Assets", key: "business" },
                  { label: "Gold (current market value)", key: "gold" },
                ].map(({ label, key }) => (
                  <div key={key}>
                    <label className="text-sm text-gray-700 dark:text-gray-300">{label}(₹)</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={assets[key]}
                      onChange={(e) => handleAssetChange(key, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 rounded-xl text-black dark:text-white transition-all focus:ring-2 focus:ring-green-500 dark:bg-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-md font-medium text-red-700 dark:text-red-400 mb-2">Liabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Home Loan", key: "homeLoan" },
                  { label: "Car Loan", key: "carLoan" },
                  { label: "Credit Card", key: "creditCard" },
                  { label: "Other Loans/EMIs", key: "personalLoan" },
                ].map(({ label, key }) => (
                  <div key={key}>
                    <label className="text-sm text-gray-700 dark:text-gray-300">{label} (₹)</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={liabilities[key]}
                      onChange={(e) => handleLiabilityChange(key, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 rounded-xl text-black dark:text-white transition-all focus:ring-2 focus:ring-red-500 dark:bg-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex justify-end">
              <button
                onClick={exportToPDF}
                className="flex items-center text-white calc-gradient-bg px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Export as PDF
              </button>
            </div>
            <div id="export-content" className="flex flex-col gap-6 bg-transparent rounded-xl">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 calc-ring text-center">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Your Financial Summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <SummaryCard label="Total Assets" amount={totalAssets} color="green" />
                <SummaryCard label="Total Liabilities" amount={totalLiabilities} color="red" />
                <SummaryCard label="Net Worth" amount={netWorth} color="blue" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ChartCard title="Bar Chart" ref={barChartRef} />
              <ChartCard title="Assets vs Liabilities" ref={doughnutChartRef} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ label, amount, color }) {
  const formatted = "₹" + amount.toLocaleString("en-IN");
  
  const colorMap = {
    green: "bg-green-50 dark:bg-green-950/40 ring-green-300 dark:ring-green-800 text-green-700 dark:text-green-400",
    red: "bg-red-50 dark:bg-red-950/40 ring-red-300 dark:ring-red-800 text-red-700 dark:text-red-400",
    blue: "bg-blue-50 dark:bg-blue-950/40 ring-blue-300 dark:ring-blue-800 text-blue-700 dark:text-blue-400",
  };
  
  const classes = colorMap[color] || colorMap.blue;
  const parts = classes.split(" ");
  const bgClass = parts.slice(0, 2).join(" "); // bg + dark:bg
  const ringClass = parts.slice(2, 4).join(" "); // ring + dark:ring
  const textClass = parts.slice(4).join(" ");  // text + dark:text

  return (
    <div className={`p-4 ${bgClass} rounded-xl ring-1 ${ringClass}`}>
      <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
      <p className={`text-lg font-bold ${textClass} transition-all duration-500`}>
        {formatted}
      </p>
    </div>
  );
}

const ChartCard = React.forwardRef(({ title }, ref) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg ring-2 calc-ring">
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{title}</p>
      <div className="h-60 flex items-center justify-center">
        <canvas ref={ref}></canvas>
      </div>
    </div>
  );
});

export default NetWorthCalculator;
