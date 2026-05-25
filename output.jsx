
import React, { useState } from "react";
import "./MarketTop.css"; // We'll create this

export default function MarketTop() {
  const [isPaused, setIsPaused] = useState(false);

  const stocks = [
  {
    "title": "ABB INDIA LIMITED",
    "sym": "ABB",
    "px": "6,790.5",
    "chg": "+2,035",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+42.79%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ADANI ENERGY SOLUTION LTD",
    "sym": "ADANIENSOL",
    "px": "1,383.8",
    "chg": "+459",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+49.63%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ADANI ENTERPRISES LIMITED",
    "sym": "ADANIENT",
    "px": "2,796.4",
    "chg": "+710",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+34.03%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ADANI GREEN ENERGY LTD",
    "sym": "ADANIGREEN",
    "px": "1,372.2",
    "chg": "+467.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+51.74%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ADANI PORT &amp; SEZ LTD",
    "sym": "ADANIPORTS",
    "px": "1,797.9",
    "chg": "+383.7",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+27.13%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ADANI POWER LTD",
    "sym": "ADANIPOWER",
    "px": "227.55",
    "chg": "+86.63",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+61.47%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "AMBUJA CEMENTS LTD",
    "sym": "AMBUJACEM",
    "px": "439.65",
    "chg": "-106.95",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-19.57%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "APOLLO HOSPITALS ENTER. L",
    "sym": "APOLLOHOSP",
    "px": "8,408",
    "chg": "+1,611",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+23.70%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ASIAN PAINTS LIMITED",
    "sym": "ASIANPAINT",
    "px": "2,672",
    "chg": "-31.8",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-1.18%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "AXIS BANK LIMITED",
    "sym": "AXISBANK",
    "px": "1,301.1",
    "chg": "+6.3",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+0.49%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "BAJAJ AUTO LIMITED",
    "sym": "BAJAJ-AUTO",
    "px": "10,490",
    "chg": "+1,120",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+11.95%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "BAJAJ FINSERV LTD.",
    "sym": "BAJAJFINSV",
    "px": "1,802.3",
    "chg": "-190.8",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-9.57%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BAJAJ HOUSING FINANCE LTD",
    "sym": "BAJAJHFL",
    "px": "83.09",
    "chg": "-7.46",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-8.24%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BAJAJ HOLDINGS &amp; INVS LTD",
    "sym": "BAJAJHLDNG",
    "px": "10,689",
    "chg": "-46",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-0.43%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BAJAJ FINANCE LIMITED",
    "sym": "BAJFINANCE",
    "px": "937.5",
    "chg": "-5.35",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-0.57%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BANK OF BARODA",
    "sym": "BANKBARODA",
    "px": "269.5",
    "chg": "-35.8",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-11.73%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BHARAT ELECTRONICS LTD",
    "sym": "BEL",
    "px": "420.5",
    "chg": "+3.2",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+0.77%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "BHARTI AIRTEL LIMITED",
    "sym": "BHARTIARTL",
    "px": "1,876.9",
    "chg": "-125.3",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-6.26%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BOSCH LIMITED",
    "sym": "BOSCHLTD",
    "px": "36,500",
    "chg": "+790",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+2.21%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "BHARAT PETROLEUM CORP  LT",
    "sym": "BPCL",
    "px": "307.2",
    "chg": "-46.95",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-13.26%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BRITANNIA INDUSTRIES LTD",
    "sym": "BRITANNIA",
    "px": "5,333",
    "chg": "-599",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-10.10%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "CANARA BANK",
    "sym": "CANBK",
    "px": "132.5",
    "chg": "-22.18",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-14.34%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "CG POWER AND IND SOL LTD",
    "sym": "CGPOWER",
    "px": "871.6",
    "chg": "+297.35",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+51.78%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "CHOLAMANDALAM IN &amp; FIN CO",
    "sym": "CHOLAFIN",
    "px": "1,592.6",
    "chg": "-71.4",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-4.29%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "CIPLA LTD",
    "sym": "CIPLA",
    "px": "1,401.9",
    "chg": "+31.5",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+2.30%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "COAL INDIA LTD",
    "sym": "COALINDIA",
    "px": "459.1",
    "chg": "+35.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+8.48%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "DIVI S LABORATORIES LTD",
    "sym": "DIVISLAB",
    "px": "6,817",
    "chg": "+746",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+12.29%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "DLF LIMITED",
    "sym": "DLF",
    "px": "592.75",
    "chg": "-20.55",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-3.35%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "AVENUE SUPERMARTS LIMITED",
    "sym": "DMART",
    "px": "4,098.5",
    "chg": "+374.4",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+10.05%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "DR. REDDY S LABORATORIES",
    "sym": "DRREDDY",
    "px": "1,307.1",
    "chg": "+89.6",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+7.36%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "EICHER MOTORS LTD",
    "sym": "EICHERMOT",
    "px": "7,353",
    "chg": "+304",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+4.31%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "SIEMENS ENERGY INDIA LTD",
    "sym": "ENRIN",
    "px": "3,478.8",
    "chg": "+1,276",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+57.93%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ETERNAL LIMITED",
    "sym": "ETERNAL",
    "px": "247.77",
    "chg": "-28.13",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-10.20%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "GAIL (INDIA) LTD",
    "sym": "GAIL",
    "px": "169.19",
    "chg": "+5.62",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+3.44%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "GODREJ CONSUMER PRODUCTS",
    "sym": "GODREJCP",
    "px": "1,016.5",
    "chg": "-229.5",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-18.42%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "GRASIM INDUSTRIES LTD",
    "sym": "GRASIM",
    "px": "3,158.1",
    "chg": "+370.5",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+13.29%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "HINDUSTAN AERONAUTICS LTD",
    "sym": "HAL",
    "px": "4,422.3",
    "chg": "+69.1",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+1.59%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "HAVELLS INDIA LIMITED",
    "sym": "HAVELLS",
    "px": "1,206.2",
    "chg": "-105.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-8.05%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HCL TECHNOLOGIES LTD",
    "sym": "HCLTECH",
    "px": "1,169.3",
    "chg": "-533.8",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-31.34%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HDFC BANK LTD",
    "sym": "HDFCBANK",
    "px": "783.25",
    "chg": "-135.45",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-14.74%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HDFC LIFE INS CO LTD",
    "sym": "HDFCLIFE",
    "px": "618.45",
    "chg": "-106.65",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-14.71%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HINDALCO  INDUSTRIES  LTD",
    "sym": "HINDALCO",
    "px": "1,082.8",
    "chg": "+138.35",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+14.65%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "HINDUSTAN UNILEVER LTD.",
    "sym": "HINDUNILVR",
    "px": "2,212",
    "chg": "-178.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-7.47%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HINDUSTAN ZINC LIMITED",
    "sym": "HINDZINC",
    "px": "637.5",
    "chg": "-30.75",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-4.60%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HYUNDAI MOTOR INDIA LTD",
    "sym": "HYUNDAI",
    "px": "1,881.5",
    "chg": "-396.3",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-17.40%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "ICICI BANK LTD.",
    "sym": "ICICIBANK",
    "px": "1,277.8",
    "chg": "-67.7",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-5.03%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "ICICI LOMBARD GIC LIMITED",
    "sym": "ICICIGI",
    "px": "1,853.6",
    "chg": "+28.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+1.58%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "THE INDIAN HOTELS CO. LTD",
    "sym": "INDHOTEL",
    "px": "659.7",
    "chg": "+3.15",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+0.48%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "INTERGLOBE AVIATION LTD",
    "sym": "INDIGO",
    "px": "4,509.4",
    "chg": "-399.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-8.14%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "INFOSYS LIMITED",
    "sym": "INFY",
    "px": "1,172.7",
    "chg": "-490.8",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-29.50%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "INDIAN OIL CORP LTD",
    "sym": "IOC",
    "px": "144.65",
    "chg": "-14.4",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-9.05%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "INDIAN RAILWAY FIN CORP L",
    "sym": "IRFC",
    "px": "100.59",
    "chg": "-16.43",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-14.04%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "ITC LTD",
    "sym": "ITC",
    "px": "303.2",
    "chg": "-21.65",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-6.66%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "JINDAL STEEL LIMITED",
    "sym": "JINDALSTEL",
    "px": "1,217.8",
    "chg": "+141.8",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+13.18%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "JIO FIN SERVICES LTD",
    "sym": "JIOFIN",
    "px": "241.75",
    "chg": "-20.85",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-7.94%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "JSW ENERGY LIMITED",
    "sym": "JSWENERGY",
    "px": "557.3",
    "chg": "+64.95",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+13.19%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "JSW STEEL LIMITED",
    "sym": "JSWSTEEL",
    "px": "1,285.2",
    "chg": "+100.8",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+8.51%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "KOTAK MAHINDRA BANK LTD",
    "sym": "KOTAKBANK",
    "px": "392.65",
    "chg": "-33.35",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-7.83%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "LIFE INSURA CORP OF INDIA",
    "sym": "LICI",
    "px": "833.3",
    "chg": "+14",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+1.71%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "LODHA DEVELOPERS LIMITED",
    "sym": "LODHA",
    "px": "899.9",
    "chg": "-45.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-4.82%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "LARSEN &amp; TOUBRO LTD.",
    "sym": "LT",
    "px": "4,017.5",
    "chg": "+223.7",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+5.90%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "LTIMINDTREE LIMITED",
    "sym": "LTIM",
    "px": "3,976.9",
    "chg": "-1,970.1",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-33.13%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "MAHINDRA &amp; MAHINDRA LTD",
    "sym": "M&amp;M",
    "px": "3,139.8",
    "chg": "-433.9",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-12.14%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "MARUTI SUZUKI INDIA LTD.",
    "sym": "MARUTI",
    "px": "13,135",
    "chg": "-2,630",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-16.68%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "MAX HEALTHCARE INS LTD",
    "sym": "MAXHEALTH",
    "px": "995.5",
    "chg": "-3.3",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-0.33%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "MAZAGON DOCK SHIPBUIL LTD",
    "sym": "MAZDOCK",
    "px": "2,488.3",
    "chg": "+119.3",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+5.04%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "SAMVRDHNA MTHRSN INTL LTD",
    "sym": "MOTHERSON",
    "px": "136.36",
    "chg": "+25.03",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+22.48%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "INFO EDGE (I) LTD",
    "sym": "NAUKRI",
    "px": "935.05",
    "chg": "-384.45",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-29.14%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "NESTLE INDIA LIMITED",
    "sym": "NESTLEIND",
    "px": "1,423.9",
    "chg": "+117.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+9.03%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "NTPC LTD",
    "sym": "NTPC",
    "px": "389.05",
    "chg": "+46.6",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+13.61%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "OIL AND NATURAL GAS CORP.",
    "sym": "ONGC",
    "px": "284.9",
    "chg": "+40.89",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+16.76%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "POWER FIN CORP LTD.",
    "sym": "PFC",
    "px": "439.25",
    "chg": "+74.55",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+20.44%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "PIDILITE INDUSTRIES LTD",
    "sym": "PIDILITIND",
    "px": "1,485.9",
    "chg": "+33.1",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+2.28%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "PUNJAB NATIONAL BANK",
    "sym": "PNB",
    "px": "105.71",
    "chg": "-19.45",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-15.54%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "POWER GRID CORP. LTD.",
    "sym": "POWERGRID",
    "px": "296",
    "chg": "+36.75",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+14.18%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "REC LIMITED",
    "sym": "RECLTD",
    "px": "343.7",
    "chg": "-22.5",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-6.14%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "RELIANCE INDUSTRIES LTD",
    "sym": "RELIANCE",
    "px": "1,360.9",
    "chg": "-41.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-2.97%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "SBI LIFE INSURANCE CO LTD",
    "sym": "SBILIFE",
    "px": "1,888.8",
    "chg": "-133.2",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-6.59%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "STATE BANK OF INDIA",
    "sym": "SBIN",
    "px": "962",
    "chg": "-86.35",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-8.24%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "SHREE CEMENT LIMITED",
    "sym": "SHREECEM",
    "px": "25,320",
    "chg": "-2,110",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-7.69%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "SHRIRAM FINANCE LIMITED",
    "sym": "SHRIRAMFIN",
    "px": "965",
    "chg": "-40.5",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-4.03%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "SIEMENS LTD",
    "sym": "SIEMENS",
    "px": "3,818.2",
    "chg": "+890",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+30.39%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "SOLAR INDUSTRIES (I) LTD",
    "sym": "SOLARINDS",
    "px": "18,416",
    "chg": "+5,515",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+42.75%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "SUN PHARMACEUTICAL IND L",
    "sym": "SUNPHARMA",
    "px": "1,836.3",
    "chg": "+202.1",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+12.37%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TATA CONSUMER PRODUCT LTD",
    "sym": "TATACONSUM",
    "px": "1,188.7",
    "chg": "+13.5",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+1.15%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TATA POWER CO LTD",
    "sym": "TATAPOWER",
    "px": "411.2",
    "chg": "+57.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+16.39%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TATA STEEL LIMITED",
    "sym": "TATASTEEL",
    "px": "210.24",
    "chg": "+21.14",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+11.18%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TATA CONSULTANCY SERV LT",
    "sym": "TCS",
    "px": "2,305.9",
    "chg": "-844.5",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-26.81%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "TECH MAHINDRA LIMITED",
    "sym": "TECHM",
    "px": "1,436.8",
    "chg": "-250.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-14.85%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "TITAN COMPANY LIMITED",
    "sym": "TITAN",
    "px": "4,152.5",
    "chg": "+133.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+3.33%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TATA MOTORS PASS VEH LTD",
    "sym": "TMPV",
    "px": "372.05",
    "chg": "+24.75",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+7.13%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TORRENT PHARMACEUTICALS L",
    "sym": "TORNTPHARM",
    "px": "4,639.9",
    "chg": "+619.4",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+15.41%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TRENT LTD",
    "sym": "TRENT",
    "px": "4,340",
    "chg": "+536.2",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+14.10%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TVS MOTOR COMPANY  LTD",
    "sym": "TVSMOTOR",
    "px": "3,451.7",
    "chg": "-118.4",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-3.32%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "ULTRATECH CEMENT LIMITED",
    "sym": "ULTRACEMCO",
    "px": "11,676",
    "chg": "-688",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-5.56%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "UNITED SPIRITS LIMITED",
    "sym": "UNITDSPR",
    "px": "1,287.9",
    "chg": "-50.5",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-3.77%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "VARUN BEVERAGES LIMITED",
    "sym": "VBL",
    "px": "532.25",
    "chg": "+45.15",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+9.27%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "VEDANTA LIMITED",
    "sym": "VEDL",
    "px": "332.2",
    "chg": "-346.45",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-51.05%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "WIPRO LTD",
    "sym": "WIPRO",
    "px": "208.41",
    "chg": "-32.24",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-13.40%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "ZYDUS LIFESCIENCES LTD",
    "sym": "ZYDUSLIFE",
    "px": "1,061.1",
    "chg": "+175.8",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+19.86%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ABB INDIA LIMITED",
    "sym": "ABB",
    "px": "6,790.5",
    "chg": "+2,035",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+42.79%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ADANI ENERGY SOLUTION LTD",
    "sym": "ADANIENSOL",
    "px": "1,383.8",
    "chg": "+459",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+49.63%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ADANI ENTERPRISES LIMITED",
    "sym": "ADANIENT",
    "px": "2,796.4",
    "chg": "+710",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+34.03%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ADANI GREEN ENERGY LTD",
    "sym": "ADANIGREEN",
    "px": "1,372.2",
    "chg": "+467.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+51.74%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ADANI PORT &amp; SEZ LTD",
    "sym": "ADANIPORTS",
    "px": "1,797.9",
    "chg": "+383.7",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+27.13%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ADANI POWER LTD",
    "sym": "ADANIPOWER",
    "px": "227.55",
    "chg": "+86.63",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+61.47%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "AMBUJA CEMENTS LTD",
    "sym": "AMBUJACEM",
    "px": "439.65",
    "chg": "-106.95",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-19.57%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "APOLLO HOSPITALS ENTER. L",
    "sym": "APOLLOHOSP",
    "px": "8,408",
    "chg": "+1,611",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+23.70%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ASIAN PAINTS LIMITED",
    "sym": "ASIANPAINT",
    "px": "2,672",
    "chg": "-31.8",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-1.18%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "AXIS BANK LIMITED",
    "sym": "AXISBANK",
    "px": "1,301.1",
    "chg": "+6.3",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+0.49%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "BAJAJ AUTO LIMITED",
    "sym": "BAJAJ-AUTO",
    "px": "10,490",
    "chg": "+1,120",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+11.95%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "BAJAJ FINSERV LTD.",
    "sym": "BAJAJFINSV",
    "px": "1,802.3",
    "chg": "-190.8",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-9.57%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BAJAJ HOUSING FINANCE LTD",
    "sym": "BAJAJHFL",
    "px": "83.09",
    "chg": "-7.46",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-8.24%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BAJAJ HOLDINGS &amp; INVS LTD",
    "sym": "BAJAJHLDNG",
    "px": "10,689",
    "chg": "-46",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-0.43%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BAJAJ FINANCE LIMITED",
    "sym": "BAJFINANCE",
    "px": "937.5",
    "chg": "-5.35",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-0.57%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BANK OF BARODA",
    "sym": "BANKBARODA",
    "px": "269.5",
    "chg": "-35.8",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-11.73%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BHARAT ELECTRONICS LTD",
    "sym": "BEL",
    "px": "420.5",
    "chg": "+3.2",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+0.77%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "BHARTI AIRTEL LIMITED",
    "sym": "BHARTIARTL",
    "px": "1,876.9",
    "chg": "-125.3",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-6.26%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BOSCH LIMITED",
    "sym": "BOSCHLTD",
    "px": "36,500",
    "chg": "+790",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+2.21%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "BHARAT PETROLEUM CORP  LT",
    "sym": "BPCL",
    "px": "307.2",
    "chg": "-46.95",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-13.26%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "BRITANNIA INDUSTRIES LTD",
    "sym": "BRITANNIA",
    "px": "5,333",
    "chg": "-599",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-10.10%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "CANARA BANK",
    "sym": "CANBK",
    "px": "132.5",
    "chg": "-22.18",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-14.34%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "CG POWER AND IND SOL LTD",
    "sym": "CGPOWER",
    "px": "871.6",
    "chg": "+297.35",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+51.78%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "CHOLAMANDALAM IN &amp; FIN CO",
    "sym": "CHOLAFIN",
    "px": "1,592.6",
    "chg": "-71.4",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-4.29%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "CIPLA LTD",
    "sym": "CIPLA",
    "px": "1,401.9",
    "chg": "+31.5",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+2.30%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "COAL INDIA LTD",
    "sym": "COALINDIA",
    "px": "459.1",
    "chg": "+35.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+8.48%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "DIVI S LABORATORIES LTD",
    "sym": "DIVISLAB",
    "px": "6,817",
    "chg": "+746",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+12.29%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "DLF LIMITED",
    "sym": "DLF",
    "px": "592.75",
    "chg": "-20.55",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-3.35%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "AVENUE SUPERMARTS LIMITED",
    "sym": "DMART",
    "px": "4,098.5",
    "chg": "+374.4",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+10.05%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "DR. REDDY S LABORATORIES",
    "sym": "DRREDDY",
    "px": "1,307.1",
    "chg": "+89.6",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+7.36%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "EICHER MOTORS LTD",
    "sym": "EICHERMOT",
    "px": "7,353",
    "chg": "+304",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+4.31%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "SIEMENS ENERGY INDIA LTD",
    "sym": "ENRIN",
    "px": "3,478.8",
    "chg": "+1,276",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+57.93%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "ETERNAL LIMITED",
    "sym": "ETERNAL",
    "px": "247.77",
    "chg": "-28.13",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-10.20%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "GAIL (INDIA) LTD",
    "sym": "GAIL",
    "px": "169.19",
    "chg": "+5.62",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+3.44%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "GODREJ CONSUMER PRODUCTS",
    "sym": "GODREJCP",
    "px": "1,016.5",
    "chg": "-229.5",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-18.42%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "GRASIM INDUSTRIES LTD",
    "sym": "GRASIM",
    "px": "3,158.1",
    "chg": "+370.5",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+13.29%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "HINDUSTAN AERONAUTICS LTD",
    "sym": "HAL",
    "px": "4,422.3",
    "chg": "+69.1",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+1.59%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "HAVELLS INDIA LIMITED",
    "sym": "HAVELLS",
    "px": "1,206.2",
    "chg": "-105.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-8.05%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HCL TECHNOLOGIES LTD",
    "sym": "HCLTECH",
    "px": "1,169.3",
    "chg": "-533.8",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-31.34%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HDFC BANK LTD",
    "sym": "HDFCBANK",
    "px": "783.25",
    "chg": "-135.45",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-14.74%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HDFC LIFE INS CO LTD",
    "sym": "HDFCLIFE",
    "px": "618.45",
    "chg": "-106.65",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-14.71%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HINDALCO  INDUSTRIES  LTD",
    "sym": "HINDALCO",
    "px": "1,082.8",
    "chg": "+138.35",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+14.65%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "HINDUSTAN UNILEVER LTD.",
    "sym": "HINDUNILVR",
    "px": "2,212",
    "chg": "-178.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-7.47%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HINDUSTAN ZINC LIMITED",
    "sym": "HINDZINC",
    "px": "637.5",
    "chg": "-30.75",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-4.60%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "HYUNDAI MOTOR INDIA LTD",
    "sym": "HYUNDAI",
    "px": "1,881.5",
    "chg": "-396.3",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-17.40%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "ICICI BANK LTD.",
    "sym": "ICICIBANK",
    "px": "1,277.8",
    "chg": "-67.7",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-5.03%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "ICICI LOMBARD GIC LIMITED",
    "sym": "ICICIGI",
    "px": "1,853.6",
    "chg": "+28.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+1.58%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "THE INDIAN HOTELS CO. LTD",
    "sym": "INDHOTEL",
    "px": "659.7",
    "chg": "+3.15",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+0.48%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "INTERGLOBE AVIATION LTD",
    "sym": "INDIGO",
    "px": "4,509.4",
    "chg": "-399.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-8.14%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "INFOSYS LIMITED",
    "sym": "INFY",
    "px": "1,172.7",
    "chg": "-490.8",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-29.50%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "INDIAN OIL CORP LTD",
    "sym": "IOC",
    "px": "144.65",
    "chg": "-14.4",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-9.05%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "INDIAN RAILWAY FIN CORP L",
    "sym": "IRFC",
    "px": "100.59",
    "chg": "-16.43",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-14.04%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "ITC LTD",
    "sym": "ITC",
    "px": "303.2",
    "chg": "-21.65",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-6.66%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "JINDAL STEEL LIMITED",
    "sym": "JINDALSTEL",
    "px": "1,217.8",
    "chg": "+141.8",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+13.18%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "JIO FIN SERVICES LTD",
    "sym": "JIOFIN",
    "px": "241.75",
    "chg": "-20.85",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-7.94%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "JSW ENERGY LIMITED",
    "sym": "JSWENERGY",
    "px": "557.3",
    "chg": "+64.95",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+13.19%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "JSW STEEL LIMITED",
    "sym": "JSWSTEEL",
    "px": "1,285.2",
    "chg": "+100.8",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+8.51%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "KOTAK MAHINDRA BANK LTD",
    "sym": "KOTAKBANK",
    "px": "392.65",
    "chg": "-33.35",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-7.83%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "LIFE INSURA CORP OF INDIA",
    "sym": "LICI",
    "px": "833.3",
    "chg": "+14",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+1.71%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "LODHA DEVELOPERS LIMITED",
    "sym": "LODHA",
    "px": "899.9",
    "chg": "-45.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-4.82%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "LARSEN &amp; TOUBRO LTD.",
    "sym": "LT",
    "px": "4,017.5",
    "chg": "+223.7",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+5.90%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "LTIMINDTREE LIMITED",
    "sym": "LTIM",
    "px": "3,976.9",
    "chg": "-1,970.1",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-33.13%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "MAHINDRA &amp; MAHINDRA LTD",
    "sym": "M&amp;M",
    "px": "3,139.8",
    "chg": "-433.9",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-12.14%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "MARUTI SUZUKI INDIA LTD.",
    "sym": "MARUTI",
    "px": "13,135",
    "chg": "-2,630",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-16.68%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "MAX HEALTHCARE INS LTD",
    "sym": "MAXHEALTH",
    "px": "995.5",
    "chg": "-3.3",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-0.33%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "MAZAGON DOCK SHIPBUIL LTD",
    "sym": "MAZDOCK",
    "px": "2,488.3",
    "chg": "+119.3",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+5.04%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "SAMVRDHNA MTHRSN INTL LTD",
    "sym": "MOTHERSON",
    "px": "136.36",
    "chg": "+25.03",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+22.48%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "INFO EDGE (I) LTD",
    "sym": "NAUKRI",
    "px": "935.05",
    "chg": "-384.45",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-29.14%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "NESTLE INDIA LIMITED",
    "sym": "NESTLEIND",
    "px": "1,423.9",
    "chg": "+117.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+9.03%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "NTPC LTD",
    "sym": "NTPC",
    "px": "389.05",
    "chg": "+46.6",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+13.61%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "OIL AND NATURAL GAS CORP.",
    "sym": "ONGC",
    "px": "284.9",
    "chg": "+40.89",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+16.76%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "POWER FIN CORP LTD.",
    "sym": "PFC",
    "px": "439.25",
    "chg": "+74.55",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+20.44%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "PIDILITE INDUSTRIES LTD",
    "sym": "PIDILITIND",
    "px": "1,485.9",
    "chg": "+33.1",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+2.28%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "PUNJAB NATIONAL BANK",
    "sym": "PNB",
    "px": "105.71",
    "chg": "-19.45",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-15.54%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "POWER GRID CORP. LTD.",
    "sym": "POWERGRID",
    "px": "296",
    "chg": "+36.75",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+14.18%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "REC LIMITED",
    "sym": "RECLTD",
    "px": "343.7",
    "chg": "-22.5",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-6.14%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "RELIANCE INDUSTRIES LTD",
    "sym": "RELIANCE",
    "px": "1,360.9",
    "chg": "-41.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-2.97%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "SBI LIFE INSURANCE CO LTD",
    "sym": "SBILIFE",
    "px": "1,888.8",
    "chg": "-133.2",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-6.59%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "STATE BANK OF INDIA",
    "sym": "SBIN",
    "px": "962",
    "chg": "-86.35",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-8.24%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "SHREE CEMENT LIMITED",
    "sym": "SHREECEM",
    "px": "25,320",
    "chg": "-2,110",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-7.69%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "SHRIRAM FINANCE LIMITED",
    "sym": "SHRIRAMFIN",
    "px": "965",
    "chg": "-40.5",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-4.03%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "SIEMENS LTD",
    "sym": "SIEMENS",
    "px": "3,818.2",
    "chg": "+890",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+30.39%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "SOLAR INDUSTRIES (I) LTD",
    "sym": "SOLARINDS",
    "px": "18,416",
    "chg": "+5,515",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+42.75%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "SUN PHARMACEUTICAL IND L",
    "sym": "SUNPHARMA",
    "px": "1,836.3",
    "chg": "+202.1",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+12.37%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TATA CONSUMER PRODUCT LTD",
    "sym": "TATACONSUM",
    "px": "1,188.7",
    "chg": "+13.5",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+1.15%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TATA POWER CO LTD",
    "sym": "TATAPOWER",
    "px": "411.2",
    "chg": "+57.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+16.39%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TATA STEEL LIMITED",
    "sym": "TATASTEEL",
    "px": "210.24",
    "chg": "+21.14",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+11.18%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TATA CONSULTANCY SERV LT",
    "sym": "TCS",
    "px": "2,305.9",
    "chg": "-844.5",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-26.81%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "TECH MAHINDRA LIMITED",
    "sym": "TECHM",
    "px": "1,436.8",
    "chg": "-250.6",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-14.85%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "TITAN COMPANY LIMITED",
    "sym": "TITAN",
    "px": "4,152.5",
    "chg": "+133.9",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+3.33%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TATA MOTORS PASS VEH LTD",
    "sym": "TMPV",
    "px": "372.05",
    "chg": "+24.75",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+7.13%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TORRENT PHARMACEUTICALS L",
    "sym": "TORNTPHARM",
    "px": "4,639.9",
    "chg": "+619.4",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+15.41%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TRENT LTD",
    "sym": "TRENT",
    "px": "4,340",
    "chg": "+536.2",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+14.10%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "TVS MOTOR COMPANY  LTD",
    "sym": "TVSMOTOR",
    "px": "3,451.7",
    "chg": "-118.4",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-3.32%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "ULTRATECH CEMENT LIMITED",
    "sym": "ULTRACEMCO",
    "px": "11,676",
    "chg": "-688",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-5.56%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "UNITED SPIRITS LIMITED",
    "sym": "UNITDSPR",
    "px": "1,287.9",
    "chg": "-50.5",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-3.77%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "VARUN BEVERAGES LIMITED",
    "sym": "VBL",
    "px": "532.25",
    "chg": "+45.15",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+9.27%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  },
  {
    "title": "VEDANTA LIMITED",
    "sym": "VEDL",
    "px": "332.2",
    "chg": "-346.45",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-51.05%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "WIPRO LTD",
    "sym": "WIPRO",
    "px": "208.41",
    "chg": "-32.24",
    "chgStyle": "color: rgb(248, 113, 113);",
    "pct": " (-13.40%)",
    "pctStyle": "color: rgb(248, 113, 113);"
  },
  {
    "title": "ZYDUS LIFESCIENCES LTD",
    "sym": "ZYDUSLIFE",
    "px": "1,061.1",
    "chg": "+175.8",
    "chgStyle": "color: rgb(74, 222, 128);",
    "pct": " (+19.86%)",
    "pctStyle": "color: rgb(74, 222, 128);"
  }
];

  return (
    <div style={{ height: '28px', background: '#0b0f16', borderColor: 'rgba(255,255,255,0.14)' }} className="w-full overflow-hidden border-b flex text-xs">
      <button 
        type="button" 
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused ? "Play marquee" : "Pause marquee"} 
        className="flex items-center justify-center px-3 text-gray-400 hover:text-white bg-[#0b0f16] z-10 border-r border-gray-800"
      >
        {isPaused ? (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
          </svg>
        ) : (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h96c26.5 0 48-21.5 48-48z"></path>
          </svg>
        )}
      </button>

      <div className="flex-1 overflow-hidden relative" aria-label="Live market marquee">
        <div className={`flex whitespace-nowrap h-full items-center custom-marquee ${isPaused ? 'paused' : ''}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {/* Double the list for seamless looping */}
          {[...stocks, ...stocks].map((stock, i) => (
            <span key={i} title={stock.title} className="inline-flex items-center gap-2 mx-4 cursor-pointer hover:bg-gray-800/50 px-2 py-1 rounded">
              <span className="font-semibold text-gray-200">{stock.sym}</span>
              <span className="text-gray-300">{stock.px}</span>
              <span style={{ color: stock.chgStyle.match(/rgb\([^)]+\)/)[0] }} className="font-medium">
                {stock.chg} {stock.pct}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
