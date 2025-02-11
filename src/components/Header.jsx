import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // react-icons for heart icon

const Header = () => {
  return (
    <header className="bg-primary text-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Site Name */}
        <div className="flex items-center">
          <FaHeart className="text-3xl mr-2" />
          <span className="font-bold text-2xl">Love Kisses AI</span>
        </div>
        {/* Navigation */}
        <nav className="space-x-6">
        <Link to="/" className="hover:text-secondary transition-colors duration-200">
            Home
          </Link>
          <Link to="/roadmap" className="hover:text-secondary transition-colors duration-200">
            Roadmap
          </Link>
          <a
            href="https://t.me/yourTelegramLink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-200"
          >
            Telegram
          </a>
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







