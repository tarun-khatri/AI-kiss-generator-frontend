// src/components/BannerSection.jsx
import React from 'react';

const BannerVideo = () => {
  // Replace these URLs with your own video and poster URLs.
  const videoUrl = "https://media.pixverse.ai/pixverse%2Fmp4%2Fmedia%2Fweb%2Fori%2F0be2d1a5-0470-40cc-9e74-48a851bd4a10_seed1082574517.mp4";
  const posterUrl = "https://yourdomain.com/path/to/your-poster.png";

  return (
    <section className="container mx-auto py-8 px-4 flex flex-col md:flex-row items-center">
      {/* Left: Romantic Text */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-script font-bold text-red-600 mb-4">
          AI Kissing Video Generator
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-pink-500 leading-relaxed">
          Upload your photo with your crush and watch our AI create a magical, heart-stealing kiss.
        </p>
      </div>
      
      {/* Right: Banner Video in a small, fixed-size window */}
      <div className="w-full md:w-1/2 flex justify-end">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
          <video 
            src={videoUrl}
            poster={posterUrl}
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full border-4 border-pink-300 rounded-lg shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default BannerVideo;
