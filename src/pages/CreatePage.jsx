import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UploadSection from '../components/UploadSection';
import VideoDisplay from '../components/VideoDisplay';

const CreatePage = () => {
  // State to hold the generated video URL from the backend response
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Page Title */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-accent">
            Create Your Romantic Kiss
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text">
            Upload your photo to let our AI generate a mesmerizing kissing video that captures the magic of love.
          </p>
        </section>

        {/* Upload Section */}
        <section className="mb-8">
          <UploadSection setVideoUrl={setVideoUrl} />
        </section>

        {/* Video Display Section */}
        <section className="mb-8">
          <VideoDisplay videoUrl={videoUrl} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreatePage;
