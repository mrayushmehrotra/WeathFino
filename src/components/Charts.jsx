// Charts.jsx
import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  BarChart2,
  PieChart as PieChartIcon,
  Activity,
  Globe,
  Filter,
  Download,
  RefreshCw,
  Settings,
  Calendar,
  Clock,
  DollarSign,
  Users,
  Target,
} from "lucide-react";

const Charts = () => {
  // Stock Price Data
  const stockPriceData = [
    { time: "9:30", price: 3420, volume: 4200 },
    { time: "10:00", price: 3435, volume: 3800 },
    { time: "10:30", price: 3428, volume: 3200 },
    { time: "11:00", price: 3415, volume: 4100 },
    { time: "11:30", price: 3430, volume: 2900 },
    { time: "12:00", price: 3428, volume: 3500 },
    { time: "12:30", price: 3425, volume: 3100 },
    { time: "13:00", price: 3418, volume: 2800 },
    { time: "13:30", price: 3422, volume: 3300 },
    { time: "14:00", price: 3430, volume: 4000 },
    { time: "14:30", price: 3428, volume: 3600 },
    { time: "15:00", price: 3435, volume: 4500 },
    { time: "15:30", price: 3428, volume: 3800 },
  ];

  // Sector Performance Data
  const sectorData = [
    { name: "IT", value: 65, color: "#2563EB" },
    { name: "Banking", value: 45, color: "#3B82F6" },
    { name: "Auto", value: 30, color: "#60A5FA" },
    { name: "Pharma", value: 35, color: "#1D4ED8" },
    { name: "FMCG", value: 40, color: "#93C5FD" },
    { name: "Energy", value: 25, color: "#1E40AF" },
  ];

  // Volume Analysis Data
  const volumeData = [
    { name: "Mon", buy: 4200, sell: 3100 },
    { name: "Tue", buy: 3800, sell: 2900 },
    { name: "Wed", buy: 4500, sell: 3200 },
    { name: "Thu", buy: 5100, sell: 3800 },
    { name: "Fri", buy: 3900, sell: 2800 },
    { name: "Sat", buy: 3200, sell: 2100 },
  ];

  // Technical Indicators
  const technicalData = [
    { indicator: "RSI", value: 58, status: "neutral" },
    { indicator: "MACD", value: 12.5, status: "positive" },
    { indicator: "Bollinger", value: 72, status: "positive" },
    { indicator: "Stochastic", value: 45, status: "neutral" },
    { indicator: "Volume", value: 85, status: "positive" },
    { indicator: "Volatility", value: 35, status: "negative" },
  ];

  // Timeframe Options
  const timeframes = ["1D", "1W", "1M", "3M", "6M", "1Y", "5Y"];
  const [activeTimeframe, setActiveTimeframe] = useState("1D");
  const [activeChart, setActiveChart] = useState("line");

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
              Market Charts & Analytics
            </h1>
            <p className="text-gray-600 mt-2">
              Real-time visualization of stock market data
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center gap-2 transition-colors border border-blue-200 text-blue-700">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors text-white">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setActiveTimeframe(timeframe)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTimeframe === timeframe
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100"
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Main Price Chart */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">
                    TCS - Price Chart ({activeTimeframe})
                  </h2>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-green-600 flex items-center gap-1 font-medium">
                    <TrendingUp className="w-4 h-4" />
                    +2.4% Today
                  </span>
                  <span className="text-gray-700">₹3,428.80</span>
                </div>
              </div>
              <div className="flex gap-2 mt-3 sm:mt-0">
                {["line", "area", "bar"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveChart(type)}
                    className={`px-3 py-1 rounded-lg capitalize text-sm ${
                      activeChart === type
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                {activeChart === "line" ? (
                  <LineChart data={stockPriceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="time" stroke="#4B5563" />
                    <YAxis stroke="#4B5563" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #E5E7EB",
                        borderRadius: "6px",
                        color: "#374151",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#2563EB"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                ) : activeChart === "area" ? (
                  <AreaChart data={stockPriceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="time" stroke="#4B5563" />
                    <YAxis stroke="#4B5563" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #E5E7EB",
                        borderRadius: "6px",
                        color: "#374151",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#3B82F6"
                      fill="#93C5FD"
                      strokeWidth={2}
                    />
                  </AreaChart>
                ) : (
                  <BarChart data={stockPriceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="time" stroke="#4B5563" />
                    <YAxis stroke="#4B5563" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #E5E7EB",
                        borderRadius: "6px",
                        color: "#374151",
                      }}
                    />
                    <Bar
                      dataKey="volume"
                      fill="#3B82F6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sector Performance */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Sector Performance
                </h2>
              </div>
              <Filter className="w-5 h-5 text-blue-500" />
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "6px",
                      color: "#374151",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              {sectorData.map((sector, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: sector.color }}
                  />
                  <span className="text-sm text-gray-700">{sector.name}</span>
                  <span className="text-sm font-medium ml-auto text-blue-700">
                    {sector.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Volume and Technical Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Volume Analysis */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <BarChart2 className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Volume Analysis
                </h2>
              </div>
              <span className="text-sm text-gray-600">Buy vs Sell Volume</span>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={volumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#4B5563" />
                  <YAxis stroke="#4B5563" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "6px",
                      color: "#374151",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="buy" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="sell" fill="#EF4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Technical Indicators */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Technical Indicators
                </h2>
              </div>
              <Settings className="w-5 h-5 text-blue-500" />
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={technicalData}
                >
                  <PolarGrid stroke="#E5E7EB" />
                  <PolarAngleAxis dataKey="indicator" stroke="#4B5563" />
                  <PolarRadiusAxis stroke="#4B5563" />
                  <Radar
                    name="Indicators"
                    dataKey="value"
                    stroke="#2563EB"
                    fill="#3B82F6"
                    fillOpacity={0.3}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "6px",
                      color: "#374151",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              {technicalData.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"
                >
                  <span className="text-sm text-gray-700">
                    {indicator.indicator}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      indicator.status === "positive"
                        ? "text-green-600"
                        : indicator.status === "negative"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {indicator.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Market Cap</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">₹12.8T</div>
            <div className="text-sm text-blue-600 mt-1 font-medium">
              +2.4% Today
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Volume</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">4.2M</div>
            <div className="text-sm text-blue-600 mt-1 font-medium">
              Above Average
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">PE Ratio</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">32.45</div>
            <div className="text-sm text-blue-600 mt-1 font-medium">
              Industry Avg: 28.5
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Beta</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">0.89</div>
            <div className="text-sm text-blue-600 mt-1 font-medium">
              Low Volatility
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm p-4">
          <p>
            All charts update in real-time. Data provided by ScanX Analytics.
          </p>
          <p className="mt-1">Last updated: Today, 3:30 PM IST</p>
        </div>
      </div>
    </div>
  );
};

export default Charts;
