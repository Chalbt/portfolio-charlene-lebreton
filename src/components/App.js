import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Accueil from './Accueil/Accueil';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Accueil />
        <Footer />
      </Router>
    </div>   
  );
}

export default App;
