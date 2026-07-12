"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calculator, IndianRupeeIcon, RotateCw, Download } from "lucide-react";
import Chart from "chart.js/auto";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function RiskRewardCalculator({ fromHex = "#EF4444", toHex = "#E11D48" }) {
  const [entryPrice, setEntryPrice] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [stopLoss, setStopLoss] = useState("");

  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const doughnutChartInstance = useRef(null);

  const reset = () => {
    setEntryPrice("");
    setTargetPrice("");
    setStopLoss("");
  };

  const parseNumber = (val) => parseFloat(val) || 0;

  const risk = Math.max(parseNumber(entryPrice) - parseNumber(stopLoss), 0);
  const reward = Math.max(parseNumber(targetPrice) - parseNumber(entryPrice), 0);
  const ratio = risk > 0 ? (reward / risk).toFixed(2) : "N/A";

  const allInputsValid =
    entryPrice !== "" && targetPrice !== "" && stopLoss !== "" && risk > 0 && reward > 0;

  const formatCurrency = (val) => "₹" + val.toLocaleString("en-IN");

  const sanitizeAndSet = (val, setter) => {
    let cleaned = val.replace(/[^0-9.]/g, "");
    const parts = cleaned.split(".");
    if (parts.length > 1) {
      cleaned = parts[0] + "." + parts[1].slice(0, 1);
    }
    cleaned = cleaned.replace(/^0+(?=\d)/, "");
    if (cleaned.startsWith(".")) {
      cleaned = "0" + cleaned;
    }
    setter(cleaned);
  };

  const renderCharts = () => {
    if (barChartInstance.current) barChartInstance.current.destroy();
    if (doughnutChartInstance.current) doughnutChartInstance.current.destroy();

    if (!allInputsValid) return;

    barChartInstance.current = new Chart(barChartRef.current, {
      type: "bar",
      data: {
        labels: ["Risk", "Reward"],
        datasets: [
          {
            label: "Amount",
            data: [risk, reward],
            backgroundColor: [fromHex, "#10B981"],
            borderRadius: 8,
            borderWidth: 1,
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
        labels: ["Risk", "Reward"],
        datasets: [
          {
            data: [risk, reward],
            backgroundColor: [fromHex, "#34D399"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: "60%",
        plugins: {
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const total = risk + reward;
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
      
      pdf.save("WealthFino_Risk_Reward.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  useEffect(() => {
    renderCharts();
  }, [entryPrice, targetPrice, stopLoss]);

  useEffect(() => {
    return () => {
      if (barChartInstance.current) barChartInstance.current.destroy();
      if (doughnutChartInstance.current) doughnutChartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto py-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 calc-gradient-bg rounded-2xl mb-5 shadow-lg">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Risk-Reward Ratio Calculator
          </h1>
          <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Determine your trading risk-reward ratio and visualize trade logic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 ring-2 calc-ring calc-ring-offset">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <IndianRupeeIcon className="w-5 h-5 mr-2 calc-text" />
                Trade Details
              </h2>
              <button
                onClick={reset}
                className="flex items-center calc-text text-sm hover:underline"
              >
                <RotateCw className="w-4 h-4 mr-1" />
                Reset
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                  Entry Price (₹)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={entryPrice}
                  onChange={(e) => sanitizeAndSet(e.target.value, setEntryPrice)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-lg text-black dark:text-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                  Target Price (₹)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={targetPrice}
                  onChange={(e) => sanitizeAndSet(e.target.value, setTargetPrice)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-lg text-black dark:text-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                  Stop Loss Price (₹)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={stopLoss}
                  onChange={(e) => sanitizeAndSet(e.target.value, setStopLoss)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-lg text-black dark:text-white"
                />
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 ring-2 calc-ring text-center">
              {allInputsValid && (
                <>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Risk-Reward Ratio</p>
                  <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">1 : {parseFloat(ratio).toFixed(1)}</h2>
                  <p className="text-md mt-2 text-gray-700 dark:text-gray-300">
                    For every ₹1 risked, potential gain is ₹{parseFloat(ratio).toFixed(1)}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                    <div className="p-4 rounded-lg bg-blue-50 dark:bg-gray-700 ring-1 ring-blue-300 dark:ring-blue-800">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Risk</p>
                       <p className="text-lg font-bold text-red-700 dark:text-red-400">
                        {formatCurrency(risk)}
                       </p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-50 dark:bg-gray-700 ring-1 ring-green-300 dark:ring-green-800">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Reward</p>
                       <p className="text-lg font-bold text-green-700 dark:text-green-400">
                        {formatCurrency(reward)}
                       </p>
                    </div>
                  </div>
                </>
              )}
              {!allInputsValid && (
                <p className="text-gray-600 dark:text-gray-300">Enter all values to calculate risk-reward</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ring-2 calc-ring">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Risk vs Reward (Bar)</p>
                <div className="h-60 flex items-center justify-center">
                  {allInputsValid ? (
                    <canvas ref={barChartRef}></canvas>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">Enter valid prices to generate chart</p>
                  )}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ring-2 calc-ring">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Proportion (Doughnut)</p>
                <div className="h-60 flex items-center justify-center">
                  {allInputsValid ? (
                    <canvas ref={doughnutChartRef}></canvas>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">Enter valid prices to generate chart</p>
                  )}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiskRewardCalculator;
