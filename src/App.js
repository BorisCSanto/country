import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Quizz from './pages/Quizz';
import Home from './pages/Home';
import "./styles/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<Quizz />} />

        {/* default */}
        <Route path="*" element={<Home />} />
      </Routes>

    </BrowserRouter>


  );
};

export default App;