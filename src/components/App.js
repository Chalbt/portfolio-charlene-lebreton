import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Accueil from './Accueil';
import Portfolio from './Portfolio';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Accueil />} />
          <Route path="/portfolio/:id" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </div>   
  );
}

export default App;
