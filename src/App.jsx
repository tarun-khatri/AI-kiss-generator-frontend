import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The HomePage is rendered at the root URL */}
        <Route path="/" element={<HomePage />} />
        {/* Additional routes can be added here if needed in the future */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
