
import React from 'react';

const BannerSection = () => {
  // Replace with your own video and poster URLs.
  const videoUrl = "https://media.pixverse.ai/pixverse%2Fmp4%2Fmedia%2Fweb%2Fori%2F0be2d1a5-0470-40cc-9e74-48a851bd4a10_seed1082574517.mp4"
  const posterUrl = "https://yourdomain.com/path/to/your-poster.png";

  return (
    <section className="container mx-auto py-12 flex flex-col md:flex-row items-center">
      {/* Left: Romantic Text */}
      <div className="md:w-1/2 px-4 text-left">
        <h1 className="text-4xl md:text-5xl font-script font-bold text-red-600 mb-4">
          AI Kissing Video Generator
        </h1>
        <p className="text-lg md:text-xl text-pink-500">
          Upload a photo with your crush and watch our AI craft a mesmerizing kiss that captures your heart.
        </p>
      </div>
      
      {/* Right: Banner Video */}
      <div className="md:w-1/2 px-4 flex justify-end mt-8 md:mt-0">
        <div className="w-full max-w-sm">
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

export default BannerSection;
