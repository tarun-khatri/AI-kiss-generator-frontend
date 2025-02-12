import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContractAddress from '../components/ContractAddress';
import BannerVideo from '../components/BannerVideo';

const HomePage = () => {
  // State to hold the generated video URL from the backend response
  const [videoUrl, setVideoUrl] = useState('');

  const contractAddress = "0x1234567890ABCDEF1234567890ABCDEF12345678";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
       

        {/* Hero Section */}
        {/* <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-accent">Experience the Magic of a Kiss</h1>
          <p className="text-lg text-text">Upload the photo and let AI create a romantic kissing video that captures the essence of love.</p>
        </section> */}

        <section>
          <BannerVideo/>
        </section>

        <section className="mb-8">
          <ContractAddress address={contractAddress} /> 
        </section>




      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
