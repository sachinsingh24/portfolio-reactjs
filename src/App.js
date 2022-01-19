/** @format */

import React from 'react';
import Navbar from './Components/Navbar/Home_Navbar.js';
import Hero from './Components/Hero/Hero.js';
import About from './Components/About/About.js';
import Portfolio from './Components/Portfolio/Portfolio.js';
import Skill from './Components/Skills/Skill.js';
import Contact from './Components/Contacts/Contact.js';
import Footer from './Components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Scrollbars } from 'react-custom-scrollbars';
import './App.css';
const App = () => {
  return (
    <main>
      <div className='app'>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
