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
  // WCAG 2.2.2 — explicit user-controlled pause state (separate from hover)
  const [userPaused, setUserPaused] = useState(false);
  const videoRefs = useRef([]);

  const prev = () => {
    setActive((p) => (p === 0 ? videos.length - 1 : p - 1));
    if (!userPaused) resetAutoPlay();
  };

  const next = () => {
    setActive((p) => (p === videos.length - 1 ? 0 : p + 1));
    if (!userPaused) resetAutoPlay();
  };

  const togglePause = () => {
    setUserPaused((prev) => {
      const nowPaused = !prev;
      setIsAutoPlaying(!nowPaused);
      return nowPaused;
    });
  };

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (!isAutoPlaying || userPaused) return;
    const interval = setInterval(() => {
      setActive((p) => (p === videos.length - 1 ? 0 : p + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, userPaused, videos.length]);

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 200);
  };

  const handleMouseEnter = () => { if (!userPaused) setIsAutoPlaying(false); };
  const handleMouseLeave = () => { if (!userPaused) setIsAutoPlaying(true); };

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
        py-12 md:py-20 relative overflow-hidden
       
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP TEXT */}
        <div className="text-center mb-12">
          <div
            className="
              inline-block px-6 py-3 md:px-10 md:py-4 rounded-xl     
              bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
            "
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold            text-black
              dark:text-white">
              See On YouTube!
            </h2>
          </div>

          <p
            className="
              text-lg mt-8 max-w-2xl mx-auto
              text-black
              dark:text-white
            "
          >
            Watch simplified market insights and educational sessions on our
            YouTube channel.
          </p>
        </div>

        {/* VIDEO SLIDER */}
        <div
          className="relative flex items-center justify-center h-[420px] md:h-[520px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* LEFT ARROW */}
          <button
            onClick={prev}
            aria-label="Previous video"
            className="
              absolute left-4 z-30 w-10 h-10 rounded-full
              bg-black/10 text-black
              hover:bg-black/20
              dark:bg-white/10 dark:text-white dark:hover:bg-white/20
              transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37]
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
                        ? "z-10 -translate-x-[180px] md:-translate-x-[320px] scale-90 opacity-40"
                        : isRight
                        ? "z-10 translate-x-[180px] md:translate-x-[320px] scale-90 opacity-40"
                        : "opacity-0 scale-75"
                    }
                  `}
                >
                  <div
                    className={`
    relative w-[85vw] max-w-[340px] md:max-w-none md:w-[420px] h-[380px] md:h-[460px]
    rounded-2xl overflow-hidden
    shadow-2xl
    bg-white
    dark:bg-black
    transition-all duration-700
    ${
      isActive
        ? `
      p-[2px] md:p-[3px]
      bg-gradient-to-r from-[#F3D98B] via-[#D4AF37] to-[#B8962E]
      shadow-[0_0_50px_-12px]
      dark:shadow-[0_0_50px_-12px_rgba(212,175,55,0.4)]
      light:shadow-[0_0_50px_-12px_rgba(212,175,55,0.4)]
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
                        <h2 className="text-white text-xl font-bold mb-4">
                          {video.title}
                        </h2>

                        <a
                          href="https://www.youtube.com/WealthFino"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
          flex items-center gap-2 px-6 py-2.5 rounded-full
          font-bold text-lg text-white
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
            aria-label="Next video"
            className="
              absolute right-4 z-30 w-10 h-10 rounded-full
              bg-black/10 text-black
              hover:bg-black/20
              dark:bg-white/10 dark:text-white dark:hover:bg-white/20
              transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37]
            "
          >
            →
          </button>
        </div>

        {/* ===== WCAG 2.2.2 — Pause/Play button for auto-advancing carousel ===== */}
        <div className="flex justify-center mt-6">
          <button
            onClick={togglePause}
            aria-label={userPaused ? "Play video slideshow" : "Pause video slideshow"}
            aria-pressed={userPaused}
            className="
              flex items-center gap-2 px-5 py-2 rounded-full
              text-sm font-semibold
              border-2 border-[#D4AF37]
              text-black dark:text-white
              bg-white/80 dark:bg-white/10
              hover:bg-[#D4AF37]/20 dark:hover:bg-[#D4AF37]/20
              focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2
              transition-all duration-200
            "
          >
            {userPaused ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Play Slideshow</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
                <span>Pause Slideshow</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
