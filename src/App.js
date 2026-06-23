
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Ensure this path is correct
import MovieDetail from './components/MovieDetail'; // Correct path here
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav /> {/* Navigation component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

