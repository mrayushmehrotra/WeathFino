import React, { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Portfolio Manager",
      content:
        "WealthFino's algorithmic strategies have consistently outperformed our benchmarks.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Family Office Director",
      content:
        "The personalized service and transparency are unmatched in the industry.",
      rating: 5,
    },
    {
      name: "James Kim",
      role: "Retail Investor",
      content:
        "Made algorithmic trading accessible with excellent education resources.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Trusted by
            <span className="gradient-text"> Industry Leaders</span>
          </h2>
          <p className="text-black">
            Hear from investors who transformed their wealth management
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm">
          <div className="flex items-start mb-8">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white text-2xl mr-6">
              {testimonials[activeIndex].name.charAt(0)}
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[activeIndex].rating
                        ? "text-yellow-400"
                        : "text-black"
                    }`}
                  >
                    ★
                  </div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-black text-lg italic mb-6">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div>
                <div className="font-bold text-black">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-black">
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-black mb-8">Featured in leading publications</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Forbes", "Bloomberg", "WSJ", "FT", "CNBC"].map((name) => (
              <div key={name} className="text-black font-medium">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
