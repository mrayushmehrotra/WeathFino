"use client";

import React, { useEffect, useState } from "react";
import { BadgePercent, RotateCw, TrendingUp, Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ROICalculatorApp({ fromHex = "#F97316", toHex = "#EF4444" }) {
  const [entry, setEntry] = useState("");
  const [quantity, setQuantity] = useState("");
  const [investment, setInvestment] = useState(0);
  const [targetPrice, setTargetPrice] = useState("");
  const [stoplossPrice, setStoplossPrice] = useState("");
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const entryNum = parseFloat(entry);
    const quantityNum = parseFloat(quantity);
    if (!isNaN(entryNum) && !isNaN(quantityNum)) {
      setInvestment(entryNum * quantityNum);
    } else {
      setInvestment(0);
    }
  }, [entry, quantity]);

  const calculateROI = (price) => {
    const netProfit =
      (price - parseFloat(entry || 0)) * parseFloat(quantity || 0);
    const roi = investment !== 0 ? (netProfit / investment) * 100 : 0;
    return { netProfit, roi: parseFloat(roi.toFixed(2)) };
  };

  const chartData = levels.map((level) => {
    const { netProfit, roi } = calculateROI(level.price);
    return { name: level.label, roi, netProfit, absNetProfit: Math.abs(netProfit) };
  });

  const handleAddLevel = () => {
    const newLevels = [];
    if (targetPrice) newLevels.push({ label: "Target", price: parseFloat(targetPrice) });
    if (stoplossPrice) newLevels.push({ label: "Stoploss", price: parseFloat(stoplossPrice) });
    if (newLevels.length === 0) return;
    setLevels((prev) => [...prev, ...newLevels]);
    setTargetPrice("");
    setStoplossPrice("");
  };

  const handleReset = () => {
    setEntry("");
    setQuantity("");
    setInvestment(0);
    setTargetPrice("");
    setStoplossPrice("");
    setLevels([]);
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
        backgroundColor: isDark ? "#1f2937" : "#ffffff",
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
      
      pdf.save("WealthFino_ROI_Calculation.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const inputCls =
    "w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-trading-green transition";

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-6">

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 calc-gradient-bg rounded-2xl mb-5 shadow-lg">
            <TrendingUp className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            ROI Calculator
          </h1>
          <p className="text-md sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate your return on investment by setting target and stoploss levels.
          </p>
        </div>

          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:p-8 text-gray-800 dark:text-white">

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BadgePercent className="w-5 h-5 calc-text" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Trade Details
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={exportToPDF}
                className="flex items-center gap-1 text-sm text-white calc-gradient-bg px-3 py-1.5 rounded-lg transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-sm calc-text hover:underline cursor-pointer"
              >
                <RotateCw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>
          <div id="export-content" className="bg-white dark:bg-gray-800 rounded-xl p-1 -m-1">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Entry Price (₹)
              </label>
              <input
                type="number"
                value={entry}
                onChange={(e) => setEntry(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="e.g. 100"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Quantity
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="e.g. 50"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Total Investment (₹)
              </label>
              <input
                type="number"
                value={investment}
                readOnly
                className="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-lg cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Target Price (₹)
              </label>
              <input
                type="number"
                value={targetPrice}
                onChange={(e) => setTargetPrice(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="e.g. 150"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-trading-green transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Stoploss Price (₹)
              </label>
              <input
                type="number"
                value={stoplossPrice}
                onChange={(e) => setStoplossPrice(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="e.g. 90"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-trading-cyan transition"
              />
            </div>
            <div className="flex flex-col justify-end gap-2">
              <button
                onClick={handleAddLevel}
                className="w-full calc-gradient-bg hover:shadow-lg text-white px-4 py-2.5 rounded-lg font-semibold transition cursor-pointer"
              >
                Calculate
              </button>
            </div>
          </div>

          {levels.length > 0 && (
            <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="min-w-full text-sm">
                <thead className="calc-text font-semibold" style={{backgroundColor: fromHex + "1A"}}>
                  <tr>
                    <th className="px-4 py-3 text-left">Label</th>
                    <th className="px-4 py-3 text-right">Price</th>
                    <th className="px-4 py-3 text-right">Net Profit</th>
                    <th className="px-4 py-3 text-right">ROI (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {levels.map((level, idx) => {
                    const { netProfit, roi } = calculateROI(level.price);
                    return (
                      <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200">{level.label}</td>
                        <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                          ₹{level.price.toFixed(2)}
                        </td>
                        <td className={`px-4 py-3 text-right font-semibold ${netProfit >= 0 ? "text-green-700 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
                          ₹{netProfit.toFixed(2)}
                        </td>
                        <td className={`px-4 py-3 text-right font-semibold ${roi >= 0 ? "text-blue-700 dark:text-blue-400" : "text-red-500 dark:text-red-400"}`}>
                          {roi}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                ROI Over Levels
              </h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6b7280" }} />
                    <YAxis tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12, fill: "#6b7280" }} />
                    <Tooltip
                      formatter={(v) => [`${v}%`, "ROI"]}
                      contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: 8, color: "#f1f5f9" }}
                    />
                    <Line type="monotone" dataKey="roi" stroke={fromHex} strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Profit Share
              </h3>
              <div className="h-56">
                {chartData.some((d) => d.absNetProfit > 0) ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData.filter((d) => d.absNetProfit > 0)}
                        dataKey="absNetProfit"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      >
                        {chartData
                          .filter((d) => d.absNetProfit > 0)
                          .map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={entry.netProfit >= 0 ? fromHex : toHex}
                            />
                          ))}
                      </Pie>
                      <Tooltip
                        formatter={(value, name, props) => {
                          const index = props?.payload?.index;
                          const actual = chartData?.[index]?.netProfit;
                          return typeof actual === "number"
                            ? [`₹${actual.toFixed(2)}`, name]
                            : [value, name];
                        }}
                        contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: 8, color: "#f1f5f9" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Add a target or stoploss to see chart
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
