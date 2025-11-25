import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-white/20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>

        <footer className="py-12 text-center text-sm text-gray-600">
          <p>nada mas</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
