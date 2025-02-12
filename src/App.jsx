import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Roadmap from './pages/Roadmap';
import CreatePage from './pages/CreatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The HomePage is rendered at the root URL */}
        <Route path="/" element={<HomePage />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/create" element={<CreatePage />} />
        {/* Additional routes can be added here if needed in the future */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
