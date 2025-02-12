// src/pages/Roadmap.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 bg-primary text-white shadow py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <FaHeart className="text-3xl mr-2" />
            <span className="font-bold text-2xl">Love Kisses AI</span>
          </div>
          <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-secondary transition-colors duration-200">
              Home
            </Link>
            <span className="text-secondary font-bold">Roadmap</span>
            <a href="https://t.me/yourTelegramLink" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200">
              Telegram
            </a>
            <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200">
              Twitter
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-4">Our Passionate Roadmap</h1>
          <p className="text-base sm:text-lg md:text-xl text-text">
            We’re continuously crafting enchanting experiences. Here’s a glimpse of the magical features coming soon.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-accent">Voice to Video: A Symphony of Love</h2>
            <p className="mt-2 text-sm sm:text-base text-text">
              Soon, let your voice express your deepest passion. Our AI will transform your heartfelt messages into mesmerizing video moments that echo the rhythm of love.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-accent">Text to Video: Words of Romance</h2>
            <p className="mt-2 text-sm sm:text-base text-text">
              Imagine describing a kiss in words and watching it come alive. Our upcoming text-to-video feature will turn your poetic expressions into vivid, romantic visuals.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-accent">Personalized Love Stories</h2>
            <p className="mt-2 text-sm sm:text-base text-text">
              In the near future, we’ll craft personalized love stories that evolve from your photos and memories—each one a unique tale of passion and tenderness.
            </p>
          </div>
          {/* Additional roadmap items can be added here */}
        </section>
      </main>

      <footer className="bg-primary text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Love Kisses AI. Made with <span className="text-accent">&hearts;</span> for romance.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Roadmap;
