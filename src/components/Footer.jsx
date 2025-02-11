import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Love Kisses AI. Made with <span className="text-accent">&hearts;</span> for romance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
