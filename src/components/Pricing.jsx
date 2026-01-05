import React, { useState } from "react";
import {
  Check,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Sparkles,
  Target,
  BarChart3,
  MessageCircle,
} from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹0",
    duration: "Free Forever",
    desc: "Start your financial journey with essential insights",
    badge: "Starter",
    color: "gray",
    icon: <BarChart3 className="w-6 h-6" />,
    features: [
      "Daily Market Overview",
      "Educational Blog Posts",
      "Weekly Research Digest",
      "Basic Community Forum Access",
      "Email Support (48hr response)",
      "Limited Stock Analysis (5/month)",
      "Market Terminology Guide",
      "Basic Risk Management Guide",
    ],
    popular: false,
    cta: "Start Learning Free",
    tag: "No credit card required",
  },
  {
    name: "Pro Trader",
    price: "₹999",
    duration: "per month",
    desc: "For active traders seeking actionable insights",
    badge: "Most Popular",
    color: "blue",
    icon: <TrendingUp className="w-6 h-6" />,
    features: [
      "All Basic Features",
      "Daily Trade Setups (2-3/day)",
      "Entry/Exit Levels with SL/Targets",
      "Priority WhatsApp Support (12hr response)",
      "Advanced Risk Management Strategies",
      "Portfolio Review Framework",
      "Real-time Market Alerts",
      "Weekly Live Webinars",
      "Technical Analysis Reports",
      "Sector Rotation Insights",
      "F&O Data Analysis",
      "Market Sentiment Indicators",
    ],
    popular: true,
    cta: "Start 7-Day Free Trial",
    tag: "Then ₹999/month • Cancel anytime",
  },
  {
    name: "Wealth Builder",
    price: "₹2,499",
    duration: "per month",
    desc: "Comprehensive wealth management for serious investors",
    badge: "Premium",
    color: "indigo",
    icon: <Award className="w-6 h-6" />,
    features: [
      "All Pro Features",
      "Model Portfolio Access (Updated Monthly)",
      "Personalized Strategy Sessions (1/month)",
      "Direct 1:1 Analyst Support",
      "Early Market Entry Alerts",
      "Advanced Technical Analysis Masterclass",
      "Quarterly Portfolio Review",
      "Exclusive Research Dashboard",
      "F&O Special Strategies",
      "Tax Planning Guidance",
      "Estate Planning Basics",
      "Wealth Preservation Strategies",
      "Priority Event Invitations",
      "Dedicated Account Manager",
    ],
    popular: false,
    cta: "Start 7-Day Free Trial",
    tag: "Then ₹2,499/month • Annual discount available",
  },
];

const features = [
  { icon: Shield, title: "SEBI Registered", desc: "INH300009914" },
  { icon: TrendingUp, title: "Research Based", desc: "Data-driven insights" },
  { icon: Clock, title: "24/7 Updates", desc: "Real-time alerts" },
  { icon: Users, title: "Expert Community", desc: "10,000+ investors" },
  { icon: Award, title: "Proven Track Record", desc: "Since 2018" },
  { icon: Zap, title: "Quick Support", desc: "Under 12 hours" },
];

const FAQ = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards (Visa, MasterCard, RuPay), UPI, net banking, and wallets via Razorpay.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the next billing cycle.",
  },
  {
    question: "Are the recommendations SEBI compliant?",
    answer:
      "Absolutely. All research and recommendations follow SEBI (Research Analyst) Regulations 2014. We provide non-advisory insights based on technical and fundamental analysis.",
  },
  {
    question: "Do you provide personal investment advice?",
    answer:
      "We provide research-based insights and educational content. For personal investment advice, please consult a SEBI registered investment advisor.",
  },
  {
    question: "Is there a contract or long-term commitment?",
    answer: "No contracts. All plans are month-to-month. Cancel anytime.",
  },
];

const Pricing = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const getAnnualPrice = (monthlyPrice) => {
    const price = parseInt(monthlyPrice.replace(/[^0-9]/g, ""));
    const annual = Math.floor(price * 12 * 0.8);
    return `₹${annual.toLocaleString("en-IN")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative container mx-auto px-6 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              SEBI Registered Research Analyst
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Invest in Your
            <span className="block mt-2 text-blue-100">
              Financial Education
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Transform your trading journey with research-based insights,
            structured learning, and expert guidance
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-full p-1 mb-12">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-blue-600 font-semibold"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-white text-blue-600 font-semibold"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              Annual
              <span className="px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-5 mt-1 mb-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <feat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900 mb-1">{feat.title}</p>
              <p className="text-sm text-gray-600">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl border overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? "border-blue-300 transform scale-[1.02] shadow-2xl shadow-blue-100"
                  : "border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-b-lg font-semibold shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" fill="white" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          plan.color === "blue"
                            ? "bg-blue-100 text-blue-600"
                            : plan.color === "indigo"
                            ? "bg-indigo-100 text-indigo-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {plan.icon}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          plan.color === "blue"
                            ? "bg-blue-100 text-blue-700"
                            : plan.color === "indigo"
                            ? "bg-indigo-100 text-indigo-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600">{plan.desc}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {billingCycle === "annual" && plan.price !== "₹0"
                        ? getAnnualPrice(plan.price)
                        : plan.price}
                    </span>
                    <span className="text-gray-500 mb-2">
                      {billingCycle === "annual" && plan.price !== "₹0"
                        ? "/ year"
                        : plan.duration}
                    </span>
                  </div>
                  {billingCycle === "annual" && plan.price !== "₹0" && (
                    <p className="text-sm text-gray-500 mt-2">
                      <span className="line-through text-gray-400">
                        ₹{parseInt(plan.price.replace(/[^0-9]/g, "")) * 12}
                      </span>{" "}
                      <span className="text-green-600 font-medium">
                        Save 20%
                      </span>
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.slice(0, 6).map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.features.length > 6 && (
                    <p className="text-sm text-gray-500 pl-8">
                      + {plan.features.length - 6} more features
                    </p>
                  )}
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-200"
                      : plan.price === "₹0"
                      ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-200"
                  }`}
                >
                  {plan.price === "₹0" ? "Get Started Free" : plan.cta}
                </button>
                <p className="text-center text-gray-500 text-sm mt-3">
                  {plan.tag}
                </p>
              </div>

              {/* Decorative Accent */}
              {plan.popular && (
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise/Corporate */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Corporate Plan
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a custom plan for your team?
              </h3>
              <p className="text-gray-600 mb-6">
                Get tailored solutions for institutions, brokerages, or
                corporate teams with bulk discounts and dedicated support.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all">
                Contact Sales
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Custom Training",
                "API Access",
                "White Label",
                "Dedicated Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
                >
                  <p className="font-medium text-gray-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900">
                      {item.question}
                    </span>
                  </div>
                  {activeFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-4 pl-14">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto mt-20 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">SEBI Registered</h4>
              <p className="text-sm text-gray-600">INH300009914</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Research Based</h4>
              <p className="text-sm text-gray-600">Data-driven insights</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Active Community</h4>
              <p className="text-sm text-gray-600">10,000+ investors</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-20 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Important Disclaimer
              </h4>
              <p className="text-gray-700 mb-4">
                Investment in securities market is subject to market risks. Read
                all related documents carefully before investing. Registration
                granted by SEBI and certification from NISM in no way guarantee
                performance or provide any assurance of returns to investors.
                Past performance is not indicative of future results.
              </p>
              <p className="text-gray-600 text-sm">
                SEBI Registration No.: INH300009914 | BSE Enlistment No.: 5590
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to transform your investment journey?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 10,000+ investors who trust Krishna Pathak for research-based
            insights
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 text-lg">
            Start Your Free Trial Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
