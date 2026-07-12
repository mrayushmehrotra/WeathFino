import { Search } from "lucide-react";
import { useState } from "react";
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
  Zap,
  Shield,
  TrendingUp as ArrowUp,
  TrendingDown as ArrowDown,
  ChevronRight,
  Eye,
  AlertCircle,
  Info,
} from "lucide-react";

const StockAnalysis = () => {
  const [showCharts, setShowCharts] = useState(false);

  const redirectToScanX = () => {
    window.location.href = "https://scanx.trade/";
  };

  const redirectToStock = (stock) => {
    const stockUrls = {
      TCS: "https://scanx.trade/company/tcs-tata-consultancy-services-ltd",
      ADANI: "https://scanx.trade/company/adani-power-ltd",
      ITC: "https://scanx.trade/company/itc-ltd",
    };

    if (stockUrls[stock]) {
      window.location.href = stockUrls[stock];
    } else {
      redirectToScanX();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      redirectToScanX();
    }
  };

  // Stock Price Data for Charts
  const stockPriceData = [
    { time: "9:30", price: 3420, volume: 4200, movingAvg: 3410 },
    { time: "10:00", price: 3435, volume: 3800, movingAvg: 3415 },
    { time: "10:30", price: 3428, volume: 3200, movingAvg: 3420 },
    { time: "11:00", price: 3415, volume: 4100, movingAvg: 3420 },
    { time: "11:30", price: 3430, volume: 2900, movingAvg: 3422 },
    { time: "12:00", price: 3428, volume: 3500, movingAvg: 3423 },
    { time: "12:30", price: 3425, volume: 3100, movingAvg: 3423 },
    { time: "13:00", price: 3418, volume: 2800, movingAvg: 3422 },
    { time: "13:30", price: 3422, volume: 3300, movingAvg: 3422 },
    { time: "14:00", price: 3430, volume: 4000, movingAvg: 3423 },
    { time: "14:30", price: 3428, volume: 3600, movingAvg: 3424 },
    { time: "15:00", price: 3435, volume: 4500, movingAvg: 3426 },
    { time: "15:30", price: 3428, volume: 3800, movingAvg: 3427 },
  ];

  // Sector Performance Data
  const sectorData = [
    { name: "IT", value: 65, color: "#8B5CF6", change: "+2.4%" },
    { name: "Banking", value: 45, color: "#10B981", change: "+1.8%" },
    { name: "Auto", value: 30, color: "#F59E0B", change: "-0.5%" },
    { name: "Pharma", value: 35, color: "#EF4444", change: "+3.2%" },
    { name: "FMCG", value: 40, color: "#3B82F6", change: "+1.2%" },
    { name: "Energy", value: 25, color: "#6366F1", change: "-1.2%" },
  ];

  // Volume Analysis Data
  const volumeData = [
    { name: "Mon", buy: 4200, sell: 3100, avg: 3650 },
    { name: "Tue", buy: 3800, sell: 2900, avg: 3350 },
    { name: "Wed", buy: 4500, sell: 3200, avg: 3850 },
    { name: "Thu", buy: 5100, sell: 3800, avg: 4450 },
    { name: "Fri", buy: 3900, sell: 2800, avg: 3350 },
    { name: "Sat", buy: 3200, sell: 2100, avg: 2650 },
  ];

  // Technical Indicators
  const technicalData = [
    { indicator: "RSI", value: 58, status: "neutral", optimal: 50 },
    { indicator: "MACD", value: 12.5, status: "positive", optimal: 0 },
    { indicator: "Bollinger", value: 72, status: "positive", optimal: 70 },
    { indicator: "Stochastic", value: 45, status: "neutral", optimal: 50 },
    { indicator: "Volume", value: 85, status: "positive", optimal: 50 },
    { indicator: "Volatility", value: 35, status: "negative", optimal: 20 },
  ];

  // Price Performance by Time
  const performanceData = [
    { time: "Pre-market", value: 3410, change: -0.5 },
    { time: "Open", value: 3425, change: 0.3 },
    { time: "Mid-day", value: 3420, change: 0.1 },
    { time: "Current", value: 3428, change: 0.8 },
    { time: "Target", value: 3450, change: 1.5 },
  ];

  // Market Sentiment Data
  const sentimentData = [
    { name: "Bullish", value: 65, color: "#10B981" },
    { name: "Neutral", value: 20, color: "#F59E0B" },
    { name: "Bearish", value: 15, color: "#EF4444" },
  ];

  // Timeframe Options
  const timeframes = ["1D", "1W", "1M", "3M", "6M", "1Y", "5Y"];
  const [activeTimeframe, setActiveTimeframe] = useState("1D");
  const [activeChart, setActiveChart] = useState("line");

  // Custom Tooltip for Price Chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-900/95 backdrop-blur-sm p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-2xl">
          <p className="text-black dark:text-white font-medium mb-2">
            {label}
          </p>
          <div className="space-y-1">
            <p className="text-black dark:text-white text-sm">
              Price:{" "}
              <span className="text-green-600 dark:text-green-400 font-bold">
                ₹{payload[0].value}
              </span>
            </p>
            <p className="text-black dark:text-white text-sm">
              Volume:{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {payload[1]?.value || payload[0].payload.volume}
              </span>
            </p>
            <p className="text-black dark:text-white text-sm">
              MA:{" "}
              <span className="text-purple-600 dark:text-purple-400">
                ₹{payload[0].payload.movingAvg}
              </span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {/* Landing Page */}
      {!showCharts ? (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-900 via-gray-900 to-black relative overflow-hidden dark:from-gray-950 dark:via-gray-900 dark:to-black">
          {/* Animated Background Elements */}
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-900/30 rounded-full blur-[160px] opacity-60 animate-pulse"></div>
          <div className="absolute -right-40 top-1/3 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute left-1/2 bottom-20 w-[300px] h-[300px] bg-indigo-500/15 dark:bg-indigo-900/20 rounded-full blur-[100px] opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl w-full px-6 text-center">
            {/* Title with gradient */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Stock Analysis
            </h1>

            {/* Description */}
            <p className="text-black dark:text-white text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Unlock powerful analytics for NSE and BSE listed stocks. Track
              real-time trends, technical patterns, and fundamental metrics to
              make informed investment decisions.
              <span className="block text-blue-400 dark:text-blue-400 font-semibold mt-2">
                Powered By ScanX.
              </span>
            </p>

            {/* Search Bar */}
            <div
              onClick={redirectToScanX}
              className="group flex items-center gap-4 bg-gray-900/60 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-700/50 dark:border-gray-800 rounded-2xl px-8 py-5 cursor-pointer hover:border-purple-500 transition-all duration-300 max-w-2xl mx-auto mb-12 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-900/30"
            >
              <Search className="text-black dark:text-white group-hover:text-purple-400 w-6 h-6 transition-colors" />
              <input
                type="text"
                placeholder="Search Stock by Name or Symbol"
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none text-white dark:text-white w-full placeholder-gray-500 cursor-pointer text-lg font-medium"
                readOnly
              />
              <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-sm font-medium">
                Search
              </div>
            </div>

            {/* Popular Stocks */}
            <div className="flex flex-wrap justify-center gap-4 mt-4 mb-16">
              {["TCS", "ADANI", "ITC"].map((stock) => (
                <button
                  key={stock}
                  onClick={() => redirectToStock(stock)}
                  className="group px-8 py-4 rounded-xl border-2 border-gray-700 dark:border-gray-800 bg-gray-900/40 dark:bg-gray-900/60 backdrop-blur-sm text-white font-semibold hover:border-purple-500 hover:bg-purple-900/20 dark:hover:bg-purple-900/30 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-900/30 transition-all duration-300 flex items-center gap-3"
                >
                  <Zap className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" />
                  {stock}
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            {/* View Charts Button */}
            <button
              onClick={() => setShowCharts(true)}
              className="group px-12 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl shadow-purple-900/50 hover:shadow-indigo-900/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-3">
                <Activity className="w-6 h-6" />
                View Advanced Charts & Analytics
                <ArrowUp className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      ) : (
        /* Charts Page - Modern Design */
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white p-4 md:p-8">
          {/* Back Button */}
          <div className="max-w-8xl mx-auto mb-6">
            <button
              onClick={() => setShowCharts(false)}
              className="group px-5 py-3 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-700 rounded-xl flex items-center gap-2 transition-all duration-300 text-black dark:text-white border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-xl"
            >
              <ChevronRight className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </div>

          {/* Header */}
          <div className="max-w-8xl mx-auto mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      Market Intelligence Dashboard
                    </h1>
                    <p className="text-black dark:text-white mt-2 flex items-center gap-2">
                      <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                        <Eye className="w-4 h-4" />
                        Real-time data streaming
                      </span>
                      • Updated: Today, 3:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 hover:from-blue-100 hover:to-blue-200 dark:hover:from-gray-800 dark:hover:to-gray-700 rounded-xl flex items-center gap-3 transition-all duration-300 border border-blue-200 dark:border-gray-800 text-blue-700 dark:text-white font-medium shadow-sm hover:shadow dark:shadow-lg dark:hover:shadow-xl">
                  <RefreshCw className="w-5 h-5" />
                  Refresh Data
                </button>
                <button className="px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl flex items-center gap-3 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl">
                  <Download className="w-5 h-5" />
                  Export Report
                </button>
                <button className="px-5 py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 hover:from-gray-800 hover:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-800 rounded-xl flex items-center gap-3 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl dark:border dark:border-gray-800">
                  <Settings className="w-5 h-5" />
                  Settings
                </button>
              </div>
            </div>

            {/* Timeframe Selector */}
            <div className="flex flex-wrap gap-3 mb-8">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setActiveTimeframe(timeframe)}
                  className={`px-5 py-3 rounded-xl transition-all duration-300 font-medium border ${
                    activeTimeframe === timeframe
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-lg"
                      : "bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-800 text-black dark:text-white border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md"
                  }`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-8xl mx-auto">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl dark:shadow-2xl dark:hover:shadow-3xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 rounded-xl">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-bold flex items-center gap-1">
                    <ArrowUp className="w-4 h-4" />
                    +2.4%
                  </span>
                </div>
                <div className="text-3xl font-bold text-black dark:text-white mb-1">
                  ₹3,428.80
                </div>
                <div className="text-black dark:text-white font-medium">
                  TCS Current Price
                </div>
                <div className="text-sm text-black dark:text-white mt-2">
                  NSE: TCS | BSE: 532540
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl dark:shadow-2xl dark:hover:shadow-3xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    High Volume
                  </span>
                </div>
                <div className="text-3xl font-bold text-black dark:text-white mb-1">
                  4.2M
                </div>
                <div className="text-black dark:text-white font-medium">
                  Trading Volume
                </div>
                <div className="text-sm text-black dark:text-white mt-2">
                  Avg: 3.8M | Peak: 5.1M
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl dark:shadow-2xl dark:hover:shadow-3xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-500 dark:from-purple-600 dark:to-violet-600 rounded-xl">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    32.45
                  </span>
                </div>
                <div className="text-3xl font-bold text-black dark:text-white mb-1">
                  ₹12.8T
                </div>
                <div className="text-black dark:text-white font-medium">
                  Market Cap
                </div>
                <div className="text-sm text-black dark:text-white mt-2">
                  P/E: 32.45 | Industry: 28.5
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl dark:shadow-2xl dark:hover:shadow-3xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 rounded-xl">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    Low Risk
                  </span>
                </div>
                <div className="text-3xl font-bold text-black dark:text-white mb-1">
                  0.89
                </div>
                <div className="text-black dark:text-white font-medium">
                  Beta Value
                </div>
                <div className="text-sm text-black dark:text-white mt-2">
                  52W High: ₹4,120 | Low: ₹3,010
                </div>
              </div>
            </div>

            {/* Main Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Main Price Chart */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-2xl">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-black dark:text-white">
                        TCS Live Chart ({activeTimeframe})
                      </h2>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-green-600 dark:text-green-400 font-bold flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/30 rounded-lg">
                        <ArrowUp className="w-4 h-4" />
                        +2.4% Today • ₹3,428.80
                      </span>
                      <span className="text-black dark:text-white">
                        NIFTY IT: +1.8%
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4 lg:mt-0">
                    {[
                      { type: "line", label: "Line", icon: TrendingUp },
                      { type: "area", label: "Area", icon: Activity },
                      { type: "bar", label: "Volume", icon: BarChart2 },
                    ].map(({ type, label, icon: Icon }) => (
                      <button
                        key={type}
                        onClick={() => setActiveChart(type)}
                        className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all ${
                          activeChart === type
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    {activeChart === "line" ? (
                      <LineChart data={stockPriceData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#E5E7EB dark:#374151"
                          opacity={0.5}
                        />
                        <XAxis
                          dataKey="time"
                          stroke="#6B7280 dark:#9CA3AF"
                          fontSize={12}
                          tickLine={false}
                        />
                        <YAxis
                          stroke="#6B7280 dark:#9CA3AF"
                          fontSize={12}
                          tickLine={false}
                          domain={["dataMin - 10", "dataMax + 10"]}
                          tickFormatter={(value) => `₹${value}`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="price"
                          name="Price"
                          stroke="url(#priceGradient)"
                          strokeWidth={3}
                          dot={false}
                          activeDot={{ r: 8, strokeWidth: 2 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="movingAvg"
                          name="MA (20)"
                          stroke="#8B5CF6"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={false}
                        />
                        <defs>
                          <linearGradient
                            id="priceGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#3B82F6"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#8B5CF6"
                              stopOpacity={0.8}
                            />
                          </linearGradient>
                        </defs>
                      </LineChart>
                    ) : activeChart === "area" ? (
                      <AreaChart data={stockPriceData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#E5E7EB dark:#374151"
                          opacity={0.5}
                        />
                        <XAxis
                          dataKey="time"
                          stroke="#6B7280 dark:#9CA3AF"
                          fontSize={12}
                        />
                        <YAxis stroke="#6B7280 dark:#9CA3AF" fontSize={12} />
                        <Tooltip content={<CustomTooltip />} />
                        <defs>
                          <linearGradient
                            id="areaGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#3B82F6"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#8B5CF6"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="price"
                          stroke="url(#priceGradient)"
                          fill="url(#areaGradient)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    ) : (
                      <BarChart data={stockPriceData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#E5E7EB dark:#374151"
                          opacity={0.5}
                        />
                        <XAxis
                          dataKey="time"
                          stroke="#6B7280 dark:#9CA3AF"
                          fontSize={12}
                        />
                        <YAxis stroke="#6B7280 dark:#9CA3AF" fontSize={12} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                          dataKey="volume"
                          name="Volume"
                          fill="url(#volumeGradient)"
                          radius={[6, 6, 0, 0]}
                        />
                        <defs>
                          <linearGradient
                            id="volumeGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#6366F1"
                              stopOpacity={0.9}
                            />
                            <stop
                              offset="95%"
                              stopColor="#8B5CF6"
                              stopOpacity={0.9}
                            />
                          </linearGradient>
                        </defs>
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </div>

                {/* Chart Indicators */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800/30">
                    <div className="text-sm text-blue-700 dark:text-blue-400 font-medium">
                      RSI
                    </div>
                    <div className="text-2xl font-bold text-black dark:text-white">
                      58.2
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      Neutral
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-4 border border-purple-200 dark:border-purple-800/30">
                    <div className="text-sm text-purple-700 dark:text-purple-400 font-medium">
                      MACD
                    </div>
                    <div className="text-2xl font-bold text-black dark:text-white">
                      12.5
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      Bullish
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-4 border border-green-200 dark:border-green-800/30">
                    <div className="text-sm text-green-700 dark:text-green-400 font-medium">
                      Support
                    </div>
                    <div className="text-2xl font-bold text-black dark:text-white">
                      ₹3,380
                    </div>
                    <div className="text-xs text-black dark:text-white">
                      Strong
                    </div>
                  </div>
                </div>
              </div>

              {/* Sector Performance */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 rounded-lg">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      Sector Performance
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    <span className="text-sm text-black dark:text-white">
                      All Sectors
                    </span>
                  </div>
                </div>

                <div className="h-80 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sectorData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        label={(entry) => `${entry.name}`}
                      >
                        {sectorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white dark:#1F2937",
                          borderRadius: "12px",
                          border: "1px solid #E5E7EB dark:#374151",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                          color: "#374151 dark:#F3F4F6",
                        }}
                        formatter={(value, name, props) => [
                          `${value}% ${props.payload.change}`,
                          props.payload.name,
                        ]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {sectorData.map((sector, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: sector.color }}
                          />
                          <span className="font-medium text-black dark:text-white">
                            {sector.name}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-bold ${
                            sector.change.startsWith("+")
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {sector.change}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-black dark:text-white">
                        {sector.value}%
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 mt-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${sector.value}%`,
                            backgroundColor: sector.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Row - Volume and Technical Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Volume Analysis */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 rounded-lg">
                      <BarChart2 className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      Volume Analysis
                    </h2>
                  </div>
                  <div className="text-sm px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg font-medium border border-blue-200 dark:border-blue-800/30">
                    Buy vs Sell Pressure
                  </div>
                </div>

                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={volumeData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#E5E7EB dark:#374151"
                        opacity={0.5}
                      />
                      <XAxis
                        dataKey="name"
                        stroke="#6B7280 dark:#9CA3AF"
                        fontSize={12}
                      />
                      <YAxis stroke="#6B7280 dark:#9CA3AF" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white dark:#1F2937",
                          borderRadius: "12px",
                          border: "1px solid #E5E7EB dark:#374151",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                          color: "#374151 dark:#F3F4F6",
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="buy"
                        name="Buy Volume"
                        fill="url(#buyGradient)"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        dataKey="sell"
                        name="Sell Volume"
                        fill="url(#sellGradient)"
                        radius={[6, 6, 0, 0]}
                      />
                      <Line
                        type="monotone"
                        dataKey="avg"
                        name="Average"
                        stroke="#6B7280 dark:#9CA3AF"
                        strokeWidth={2}
                        strokeDasharray="3 3"
                        dot={false}
                      />
                      <defs>
                        <linearGradient
                          id="buyGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#10B981"
                            stopOpacity={0.9}
                          />
                          <stop
                            offset="95%"
                            stopColor="#10B981"
                            stopOpacity={0.7}
                          />
                        </linearGradient>
                        <linearGradient
                          id="sellGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#EF4444"
                            stopOpacity={0.9}
                          />
                          <stop
                            offset="95%"
                            stopColor="#EF4444"
                            stopOpacity={0.7}
                          />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      4,200
                    </div>
                    <div className="text-sm text-black dark:text-white">
                      Max Buy
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white">
                      3,650
                    </div>
                    <div className="text-sm text-black dark:text-white">
                      Daily Avg
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      3,100
                    </div>
                    <div className="text-sm text-black dark:text-white">
                      Max Sell
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Indicators Radar */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 rounded-lg">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      Technical Indicators
                    </h2>
                  </div>
                  <div className="text-sm px-3 py-1.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-lg font-medium border border-orange-200 dark:border-orange-800/30">
                    Real-time Analysis
                  </div>
                </div>

                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="75%"
                      data={technicalData}
                    >
                      <PolarGrid stroke="#E5E7EB dark:#374151" opacity={0.5} />
                      <PolarAngleAxis
                        dataKey="indicator"
                        stroke="#6B7280 dark:#9CA3AF"
                        fontSize={12}
                        tickLine={false}
                      />
                      <PolarRadiusAxis
                        stroke="#6B7280 dark:#9CA3AF"
                        fontSize={11}
                        angle={30}
                        domain={[0, 100]}
                      />
                      <Radar
                        name="Current"
                        dataKey="value"
                        stroke="#8B5CF6"
                        fill="#8B5CF6"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                      <Radar
                        name="Optimal"
                        dataKey="optimal"
                        stroke="#10B981"
                        fill="#10B981"
                        fillOpacity={0.1}
                        strokeWidth={2}
                        strokeDasharray="3 3"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white dark:#1F2937",
                          borderRadius: "12px",
                          border: "1px solid #E5E7EB dark:#374151",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                          color: "#374151 dark:#F3F4F6",
                        }}
                      />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  {technicalData.map((indicator, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-xl border ${
                        indicator.status === "positive"
                          ? "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-green-200 dark:border-green-800/30"
                          : indicator.status === "negative"
                          ? "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 border-red-200 dark:border-red-800/30"
                          : "bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 border-yellow-200 dark:border-yellow-800/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-black dark:text-white">
                          {indicator.indicator}
                        </span>
                        <span
                          className={`text-sm font-bold ${
                            indicator.status === "positive"
                              ? "text-green-600 dark:text-green-400"
                              : indicator.status === "negative"
                              ? "text-red-600 dark:text-red-400"
                              : "text-yellow-600 dark:text-yellow-400"
                          }`}
                        >
                          {indicator.value}
                        </span>
                      </div>
                      <div className="text-xs text-black dark:text-white mt-1">
                        Optimal: {indicator.optimal}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Market Sentiment */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-2xl mb-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    Market Sentiment
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                  <AlertCircle className="w-5 h-5" />
                  Bullish Trend Detected
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    {performanceData.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-2 rounded-lg ${
                              item.change >= 0
                                ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                                : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                            }`}
                          >
                            {item.change >= 0 ? (
                              <ArrowUp className="w-5 h-5" />
                            ) : (
                              <ArrowDown className="w-5 h-5" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-black dark:text-white">
                              {item.time}
                            </div>
                            <div className="text-sm text-black dark:text-white">
                              NSE/BSE
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-black dark:text-white">
                            ₹{item.value.toLocaleString()}
                          </div>
                          <div
                            className={`text-sm font-medium ${
                              item.change >= 0
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                            }`}
                          >
                            {item.change >= 0 ? "+" : ""}
                            {item.change}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Powered by ScanX Analytics
                </h3>
              </div>
              <p className="text-black max-w-2xl mx-auto">
                All charts update in real-time with institutional-grade data.
                Advanced algorithms provide actionable insights for informed
                investment decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-black text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Real-time Data Stream
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Institutional Grade Analysis
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  AI-Powered Predictions
                </div>
              </div>
              <p className="text-black text-sm mt-8">
                Last updated: Today, 3:30 PM IST • Data latency: &lt;100ms
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StockAnalysis;
