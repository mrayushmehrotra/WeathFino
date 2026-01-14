import React, { useState, useEffect, useRef } from "react";
import video1 from "/video/video_1.mp4";
import video2 from "/video/video_1.mp4";
import video3 from "/video/video_1.mp4";

const VideoSection = () => {
  const videos = [
    { src: video1, title: "Today's Stock Suggestion" },
    { src: video2, title: "Market Analysis" },
    { src: video3, title: "Intraday Setup" },
  ];

  const [active, setActive] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRefs = useRef([]);

  const prev = () => {
    setActive((p) => (p === 0 ? videos.length - 1 : p - 1));
    resetAutoPlay();
  };

  const next = () => {
    setActive((p) => (p === videos.length - 1 ? 0 : p + 1));
    resetAutoPlay();
  };

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActive((p) => (p === videos.length - 1 ? 0 : p + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, videos.length]);

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 200);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  /* ================= VIDEO CONTROL ================= */
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [active]);

  return (
    <section
      className="
        py-20 relative overflow-hidden
        bg-gray-50
        dark:bg-[#0b0d12]
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP TEXT */}
        <div className="text-center mb-12">
          <div
            className="
              inline-block px-10 py-4 rounded-xl
              bg-gradient-to-r from-green-400 to-sky-400
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              See On YouTube!
            </h2>
          </div>

          <p
            className="
              text-lg mt-8 max-w-2xl mx-auto
              text-gray-600
              dark:text-gray-300
            "
          >
            Watch simplified market insights and educational sessions on our
            YouTube channel.
          </p>
        </div>

        {/* VIDEO SLIDER */}
        <div
          className="relative flex items-center justify-center h-[520px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="
              absolute left-4 z-30 w-10 h-10 rounded-full
              bg-black/10 text-black
              hover:bg-black/20
              dark:bg-white/10 dark:text-white dark:hover:bg-white/20
              transition
            "
          >
            ←
          </button>

          {/* VIDEOS */}
          <div className="relative w-full flex items-center justify-center">
            {videos.map((video, index) => {
              const isActive = index === active;
              const isLeft =
                index === (active - 1 + videos.length) % videos.length;
              const isRight = index === (active + 1) % videos.length;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out
                    ${
                      isActive
                        ? "z-20 scale-100 opacity-100"
                        : isLeft
                        ? "z-10 -translate-x-[320px] scale-90 opacity-40"
                        : isRight
                        ? "z-10 translate-x-[320px] scale-90 opacity-40"
                        : "opacity-0 scale-75"
                    }
                  `}
                >
                  <div
                    className={`
    relative w-[340px] md:w-[420px] h-[460px]
    rounded-2xl overflow-hidden
    shadow-2xl
    bg-white
    dark:bg-black
    transition-all duration-700
    ${
      isActive
        ? `
      p-[2px] md:p-[3px]
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
      shadow-[0_0_50px_-12px]
      dark:shadow-[0_0_50px_-12px_rgba(99,102,241,0.6)]
      light:shadow-[0_0_50px_-12px_rgba(59,130,246,0.4)]
    `
        : `
      border border-gray-200
      dark:border-gray-700/60
    `
    }
  `}
                  >
                    <div
                      className={`${
                        isActive ? "rounded-2xl overflow-hidden h-full" : ""
                      }`}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={video.src}
                        muted
                        playsInline
                        preload="metadata"
                        className={`w-full h-full object-cover ${
                          isActive ? "" : "brightness-75 grayscale"
                        }`}
                      />
                    </div>

                    {/* ACTIVE OVERLAY */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col items-center justify-end pb-8">
                        <h2 className="text-white text-xl font-semibold mb-4">
                          {video.title}
                        </h2>

                        <a
                          href="https://www.youtube.com/WealthFino"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
          flex items-center gap-2 px-6 py-2.5 rounded-full
          font-semibold text-white
          bg-gradient-to-r from-red-500 via-red-600 to-red-700
          hover:scale-105
          hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]
          transition-all duration-300
        "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186 31.247 31.247 0 0 0 0 12a31.247 31.247 0 0 0 .502 5.814 3.017 3.017 0 0 0 2.121 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.376-.505a3.017 3.017 0 0 0 2.122-2.136A31.247 31.247 0 0 0 24 12a31.247 31.247 0 0 0-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
                          </svg>
                          <span>Watch on YouTube</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="
              absolute right-4 z-30 w-10 h-10 rounded-full
              bg-black/10 text-black
              hover:bg-black/20
              dark:bg-white/10 dark:text-white dark:hover:bg-white/20
              transition
            "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
