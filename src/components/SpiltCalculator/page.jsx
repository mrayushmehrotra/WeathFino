"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Calculator,
    IndianRupeeIcon,
    Percent,
    RotateCw,
    ListOrdered,
    Hash,
    Download,
} from "lucide-react";
import Chart from "chart.js/auto";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function StockSplitCalculator({ fromHex = "#06B6D4", toHex = "#0D9488" }) {
    const [oldPrice, setOldPrice] = useState(1000);
    const [oldShares, setOldShares] = useState(100);
    const [splitFrom, setSplitFrom] = useState(2);
    const [splitTo, setSplitTo] = useState(1);
    const [results, setResults] = useState(null);

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const calculateSplit = () => {
        if (
            !oldPrice ||
            !oldShares ||
            !splitFrom ||
            !splitTo ||
            splitFrom === 0 ||
            splitTo === 0
        )
            return;

        const newPrice = (oldPrice * splitTo) / splitFrom;
        const newShares = oldShares * (splitFrom / splitTo);
        const totalValue = oldPrice * oldShares;

        setResults({
            newPrice: Math.round(newPrice),
            newShares: Math.round(newShares),
            totalValue: Math.round(totalValue),
        });
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            calculateSplit();
        }, 300);
        return () => clearTimeout(timeout);
    }, [oldPrice, oldShares, splitFrom, splitTo]);

    useEffect(() => {
        if (chartInstance.current) chartInstance.current.destroy();
        if (!results) return;

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Old", "New"],
                datasets: [
                    {
                        label: "Price per Share",
                        data: [oldPrice, results.newPrice],
                        backgroundColor: fromHex,
                    },
                    {
                        label: "Number of Shares",
                        data: [oldShares, results.newShares],
                        backgroundColor: toHex,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: "bottom" },
                    tooltip: {
                        callbacks: {
                            label: (context) =>
                                `${context.dataset.label}: ₹${context.parsed.y.toLocaleString("en-IN")}`,
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
    }, [results]);

    const resetForm = () => {
        setOldPrice(1000);
        setOldShares(100);
        setSplitFrom(2);
        setSplitTo(1);
        setResults(null);
        if (chartInstance.current) chartInstance.current.destroy();
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
      
      pdf.save("WealthFino_Stock_Split.pdf");
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };

    return (
        <div className=" bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 calc-gradient-bg rounded-2xl mb-5 shadow-lg">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Stock Split Calculator
                    </h1>
                    <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        Estimate your new share price and quantity after a stock split
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 ring-2 calc-ring calc-ring-offset">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                                    <ListOrdered className="w-5 h-5 mr-2 calc-text" />
                                    Split Details
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
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Old Price per Share (₹)
                                    </label>
                                    <input
                                        type="number"
                                        value={oldPrice}
                                        min="0"
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/^0+(?!$)/, "");
                                            setOldPrice(value === "" ? "" : Number(value));
                                        }}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-lg text-black dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Number of Shares Owned
                                    </label>
                                    <input
                                        type="number"
                                        value={oldShares}
                                        min="0"
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/^0+(?!$)/, "");
                                            setOldShares(value === "" ? "" : Number(value));
                                        }}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-lg text-black dark:text-white"
                                    />
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Split From
                                        </label>
                                        <input
                                            type="number"
                                            value={splitFrom}
                                            min="0"
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/^0+(?!$)/, "");
                                                setSplitFrom(value === "" ? "" : Number(value));
                                            }}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-lg text-black dark:text-white"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Split To
                                        </label>
                                        <input
                                            type="number"
                                            value={splitTo}
                                            min="0"
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/^0+(?!$)/, "");
                                                setSplitTo(value === "" ? "" : Number(value));
                                            }}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 text-lg text-black dark:text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        {results && (
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
                                        <p className="text-sm text-gray-600 dark:text-gray-300">New Price per Share</p>
                                        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">
                                            ₹{results.newPrice.toLocaleString("en-IN")}
                                        </h3>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ring-2 calc-ring">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Total Number of Shares</p>
                                        <h3 className="text-xl font-bold text-green-700 dark:text-green-400">
                                            {results.newShares.toLocaleString("en-IN")}
                                        </h3>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ring-2 calc-ring">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Total Value </p>
                                        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">
                                            ₹{results.totalValue.toLocaleString("en-IN")}
                                        </h3>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ring-2 calc-ring">
                                    <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Split Comparison</h3>
                                    <div className="h-80">
                                        <canvas ref={chartRef}></canvas>
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
