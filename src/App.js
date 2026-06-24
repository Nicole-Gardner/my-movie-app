
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieContainer from "./components/MovieContainer";
import MovieDetail from "./components/MovieDetail";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./components/style.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
    
        <Route path="/" element={<MovieContainer />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;