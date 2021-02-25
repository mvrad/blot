import React from 'react';
import './css/normalize.min.css';
import './css/App.css';
import MobileNav from './components/MobileNav/MobileNav';
import Nav from './components/Nav/Nav';
import Pattern1 from './components/Header/Pattern1';
import Pattern2 from './components/Header/Pattern2';
import Header from './components/Header/Header';
import DevicesImage from './components/Header/DevicesImage';
import About from './components/Header/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Pattern1 />
      <MobileNav />
      <Nav />
      <Header />
      <DevicesImage />
      <About />
      <Footer />
      <Pattern2 />
    </div>
  );
}

export default App;