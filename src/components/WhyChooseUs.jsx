import { TrendingUp, Layers, Users, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ================= DATA ================= */
const features = [
  {
    icon: TrendingUp,
    title: "Live Trade",
    desc: "Get real-time, research-backed trade insights with disciplined execution.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Model Portfolio",
    desc: "Professionally curated portfolios for smart sector allocation.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Learn, share, and grow with serious and disciplined investors.",
    gradient: "from-sky-500 to-blue-500",
  },
];

/* ================= CARD TILT ================= */
const handleMouseMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = -(y - rect.height / 2) / 18;
  const rotateY = (x - rect.width / 2) / 18;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
};

/* ================= COMPONENT ================= */
const WhyWealthUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative py-28 overflow-hidden
        bg-gradient-to-br
        from-white via-blue-50 to-white
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        transition-colors duration-300
      "
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-400/20 rounded-full blur-3xl animate-float delay-700" />

      {/* SPARKLES */}
      <Sparkles className="absolute top-10 left-10 w-6 h-6 text-blue-400/40 dark:text-blue-400/30 animate-float" />
      <Sparkles className="absolute bottom-20 right-16 w-5 h-5 text-cyan-400/40 dark:text-cyan-400/30 animate-float delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="
              inline-block px-6 py-2 rounded-full
              bg-blue-100 dark:bg-blue-500/15
              text-blue-600 dark:text-blue-400
              font-semibold
            "
          >
            Why Choose Us
          </span>

          <h2
            className="
              mt-6 text-5xl font-bold
              text-slate-900 dark:text-white
            "
          >
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-[length:200%]">
              WealthFino
            </span>
            ?
          </h2>

          <p
            className="
              mt-6 text-xl
              text-slate-600 dark:text-slate-300
            "
          >
            Research-backed strategies under SEBI RA guidelines with disciplined
            investing principles.
          </p>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="
                    relative rounded-3xl p-8
                    bg-white/90 dark:bg-slate-900/90
                    backdrop-blur-sm
                    border border-slate-200 dark:border-slate-800
                    shadow-lg dark:shadow-none
                    hover:shadow-2xl
                    transition-transform duration-300
                    group
                  "
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${item.gradient} shadow-lg animate-icon-float`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3
                    className="
                      mt-8 text-2xl font-bold
                      text-slate-900 dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4 leading-relaxed
                      text-slate-600 dark:text-slate-300
                    "
                  >
                    {item.desc}
                  </p>

                  <div className="mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

 
      </div>
    </section>
  );
};

export default WhyWealthUs;
