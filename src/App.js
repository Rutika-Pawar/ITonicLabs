import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Faq from './components/Faq';
import Whatwedo from './components/whatwedo';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Clients from './components/Clients';

import Launches from './components/launches';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
         
          
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/launches" element={<Launches />} />
        </Routes>
        
        <Services/>
        <Faq />
        <Whatwedo />
        <Product/>
        <Clients/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
