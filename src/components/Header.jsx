// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo and Site Name */}
        <div className="flex items-center mb-4 sm:mb-0">
  <img 
    src="/assets/logo2.png" 
    alt="Love Kisses AI" 
    className="h-10 w-auto mr-2" 
  />
</div>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
          <Link to="/" onClick={scrollToTop} className="hover:text-secondary transition-colors duration-200">
            Home
          </Link>
          <Link
            to="/create"
            className="hover:text-secondary transition-colors duration-200"
          >
            Create
          </Link>
          <Link to="/roadmap" className="hover:text-secondary transition-colors duration-200">
            Roadmap
          </Link>
          {/* <a
            href="https://t.me/yourTelegramLink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-200"
          >
            Telegram
          </a> */}
        
          <a
            href="https://twitter.com/yourTwitterHandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-200"
          >
            Twitter
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
