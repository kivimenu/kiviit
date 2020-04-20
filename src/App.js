import React from 'react';
import './App.css';

//components
import Navbar from './components/Navbar';
import Header from './components/Header';

// pages
import PreLoader from './pages/Preloader'
import About from './pages/About';

function App() {
  return (
    <div className="App">
        <PreLoader/>
        <Navbar/>
        <Header/>
        <a href="#" class="scrollToTop"><i class="fa fa-angle-double-up"></i></a>
        <About/>
    </div>
  );
}

export default App;
