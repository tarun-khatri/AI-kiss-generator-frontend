import React, { useState } from 'react';

const VideoDisplay = ({ videoUrl }) => {
  const [videoError, setVideoError] = useState('');

  const handleVideoError = () => {
    console.error("Video encountered an error while loading.");
    setVideoError("Failed to load video. Please try again.");
  };

  const handleVideoLoaded = () => {
    console.log("Video loaded successfully.");
    setVideoError('');
  };

  return (
    <div className="mt-6">
      {videoUrl ? (
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Generated Video</h2>
          <div className="relative rounded-lg overflow-hidden bg-gray-100">
            <video 
              controls 
              className="w-full rounded"
              src={videoUrl}
              onError={handleVideoError}
              onLoadedData={handleVideoLoaded}
              onCanPlay={handleVideoLoaded}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Only display the error message if there is one and videoUrl is not empty */}
          {videoError && !videoUrl && (
            <p className="text-red-500 mt-2">{videoError}</p>
          )}
          <a 
            href={videoUrl} 
            download="generated-video.mp4"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Download Video
          </a>
        </div>
      ) : (
        <p className="text-gray-800 text-center mt-4 font-bold text-xl italic">
        Your magical romantic moment will appear here... ✨
      </p>
      )}
    </div>
  );
};

export default VideoDisplay;
