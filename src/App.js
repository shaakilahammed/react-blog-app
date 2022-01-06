import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
