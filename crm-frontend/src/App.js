import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Info from './components/Info'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Pricing />
      <Info />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;