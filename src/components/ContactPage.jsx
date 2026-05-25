import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Users,
  Shield,
  ChevronRight,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="relative container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Connect & Grow
              <span className="block text-blue-200 dark:text-blue-300 mt-2">
                Together
              </span>
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
              Reach out to our team for expert guidance, support, and research
              insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <MessageCircle size={18} />
                WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ===== CONTACT FORM ===== */}
          <div className="lg:col-span-2">
            <div
              className="rounded-3xl p-8 md:p-10 space-y-8
      bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-black
      border border-gray-200 dark:border-white/10
      shadow-xl dark:shadow-2xl
      transition-all duration-300
    "
            >
              {/* ================= Registered Address ================= */}
              <div
                className="
        relative overflow-hidden rounded-2xl p-6
        bg-gray-50 dark:bg-white/5
        border border-gray-200 dark:border-white/10
        backdrop-blur-xl
        hover:border-indigo-500/40
        transition-all duration-300
      "
              >
                <div
                  className="
          absolute inset-0 opacity-0 hover:opacity-100 transition
          bg-gradient-to-r from-indigo-500/10 to-purple-500/10
        "
                />

                <div className="relative z-10 flex gap-4">
                  <div
                    className="
            w-12 h-12 rounded-xl
            flex items-center justify-center
            bg-indigo-500/15 text-indigo-500
            text-xl
          "
                  >
                    📍
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Registered Address
                    </h2>

                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      RS-39/43, 5/3C Golden Park,
                      <br />
                      Sankarpur West, Near Rabindranagar
                      <br />
                      Co-operative, Durgapur, West
                      <br />
                      Bengal – 713206
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= Correspondence Address ================= */}
              <div
                className="
        relative overflow-hidden rounded-2xl p-6
        bg-gray-50 dark:bg-white/5
        border border-gray-200 dark:border-white/10
        backdrop-blur-xl
        hover:border-emerald-500/40
        transition-all duration-300
      "
              >
                <div
                  className="
          absolute inset-0 opacity-0 hover:opacity-100 transition
          bg-gradient-to-r from-emerald-500/10 to-cyan-500/10
        "
                />

                <div className="relative z-10 flex gap-4">
                  <div
                    className="
            w-12 h-12 rounded-xl
            flex items-center justify-center
            bg-emerald-500/15 text-emerald-500
            text-xl
          "
                  >
                    📍
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Correspondence Address
                    </h2>

                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      207, Jayanivas, Padukamandir Road
                      <br />
                      Bharat Housing Society,
                      <br />
                      Subramanyapura Below Digicomm
                      <br />
                      Semiconductor, BANGALORE,
                      <br />
                      KARNATAKA – 560061
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== CONTACT INFO ===== */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border border-blue-100 dark:border-blue-800/30 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Phone
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 dark:text-white">
                      Phone Support
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Direct assistance
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  +91 9883455700
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  Mon-Fri, 9AM-6PM IST
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-800 border border-green-100 dark:border-green-800/30 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <MessageCircle
                      className="text-green-600 dark:text-green-400"
                      size={24}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 dark:text-white">
                      WhatsApp
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Quick chat support
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-gray-900 dark:text-white">
                    Support: 9353523685
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Updates: 7353009208
                  </p>
                </div>
                <button className="mt-4 w-full py-2 bg-green-500 dark:bg-green-600 text-white rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition">
                  Start Chat
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 border border-purple-100 dark:border-purple-800/30 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Mail
                      className="text-purple-600 dark:text-purple-400"
                      size={24}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 dark:text-white">
                      Email
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      General inquiries
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white break-all">
                  skrishna.sk4@gmail.com
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h2 className="font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Shield
                      className="text-blue-600 dark:text-blue-400"
                      size={18}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      SEBI Registered
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Fully compliant & regulated
                    </p>
                  </div>
                </div>
                {/* <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Clock
                      className="text-green-600 dark:text-green-400"
                      size={18}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      24/7 Response
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Quick reply guarantee
                    </p>
                  </div>
                </div> */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Users
                      className="text-purple-600 dark:text-purple-400"
                      size={18}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Expert Support
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Professional team ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SEBI OFFICES ================= */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Regulatory Offices
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              As a SEBI Registered Research Analyst, we maintain transparency
              with regulatory authorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Eastern Regional Office
                  </h3>
                  <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p className="flex items-start gap-2">
                  <span className="font-medium min-w-16">Address:</span>
                  <span>
                    L&T Chambers, 3rd Floor, 16 Camac Street, Kolkata - 700017,
                    West Bengal
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium min-w-16">Phone:</span>
                  <span>+91-33-23023000</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium min-w-16">Email:</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    sebiero@sebi.gov.in
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="text-gray-600 dark:text-gray-400"
                    size={20}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    SEBI Head Office
                  </h3>
                  <div className="w-20 h-1 bg-gray-600 dark:bg-gray-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p className="flex items-start gap-2">
                  <span className="font-medium min-w-16">Address:</span>
                  <span>
                    SEBI Bhavan BKC, Plot No. C4-A, 'G' Block, Bandra-Kurla
                    Complex, Mumbai - 400051
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium min-w-16">Phone:</span>
                  <span>+91-22-26449000</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium min-w-16">Helpline:</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    1800 22 7575
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= QUICK ACTIONS ================= */}
        {/* <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100 dark:text-blue-200">
                Support Availability
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30 min</div>
              <p className="text-blue-100 dark:text-blue-200">
                Average Response Time
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100 dark:text-blue-200">SEBI Compliant</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* ================= FLOATING CONTACT ================= */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
        <button className="w-14 h-14 rounded-full bg-blue-600 dark:bg-blue-700 text-white flex items-center justify-center shadow-xl hover:bg-blue-700 dark:hover:bg-blue-800 transition-all hover:scale-110 group">
          <Phone size={22} />
          <span className="absolute right-full mr-3 bg-blue-600 dark:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Call Support
          </span>
        </button>
        <button className="w-14 h-14 rounded-full bg-green-500 dark:bg-green-600 text-white flex items-center justify-center shadow-xl hover:bg-green-600 dark:hover:bg-green-700 transition-all hover:scale-110 group">
          <MessageCircle size={22} />
          <span className="absolute right-full mr-3 bg-green-500 dark:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
