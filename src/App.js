import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
