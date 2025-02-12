// src/components/ContractAddress.jsx
import React, { useState } from 'react';

const ContractAddress = ({ address }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="mt-6 flex flex-col items-center px-4">
      <div className="w-full max-w-xl bg-gradient-to-r from-pink-400 via-pink-500 to-red-500 shadow-lg rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Label "CA" */}
        <div className="text-2xl font-bold text-white mb-2 sm:mb-0">
          CA
        </div>
        {/* Box with contract address */}
        <div className="flex-grow bg-white bg-opacity-80 rounded p-2 text-gray-800 break-all text-center sm:text-left">
          {address}
        </div>
        {/* Copy button */}
        <button 
          onClick={copyToClipboard} 
          className="mt-2 sm:mt-0 sm:ml-4 bg-white text-pink-600 font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-200"
        >
          Copy
        </button>
      </div>
      {copied && (
        <p className="mt-2 text-green-400 font-medium">
          Copied!
        </p>
      )}
    </div>
  );
};

export default ContractAddress;
