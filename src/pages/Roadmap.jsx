// src/pages/Roadmap.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Optionally, you can reuse your Header component here,
          or if you want a custom header for this page, include it. */}
      <header className="bg-primary text-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <FaHeart className="text-3xl mr-2" />
            <span className="font-bold text-2xl">Love Kisses AI</span>
          </div>
          <nav className="space-x-6">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-secondary transition-colors duration-200">
              Home
            </Link>
            <span className="text-secondary">Roadmap</span>
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
          <h1 className="text-4xl font-bold text-accent mb-4">Our Romantic Roadmap</h1>
          <p className="text-lg text-text">
            We’re continuously crafting enchanting experiences. Here’s a glimpse of the magical features coming soon.
          </p>
        </section>

        <section className="space-y-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-accent">Voice to Video: A Symphony of Love</h2>
            <p className="mt-2 text-text">
              Soon, let your voice express your deepest passion. Our AI will transform your heartfelt messages into mesmerizing video moments that echo the rhythm of love.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-accent">Text to Video: Words of Romance</h2>
            <p className="mt-2 text-text">
              Imagine describing a kiss in words and watching it come to life. Our upcoming text-to-video feature will turn poetic expressions into vivid, romantic visuals.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-accent">Personalized Love Stories</h2>
            <p className="mt-2 text-text">
              In the near future, we’ll craft personalized love stories that evolve from your photos and memories—each one a unique tale of passion and tenderness.
            </p>
          </div>
          {/* You can add more roadmap items here */}
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
