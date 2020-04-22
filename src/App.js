import React from 'react';

//components
import Navbar from './components/Navbar';
import Header from './components/Header';
import KFooter from './components/KFooter';

// pages
import PreLoader from './pages/Preloader'
import About from './pages/About';
import Service from './pages/Service';
import Reached from './pages/Reached';
import CallAction from './pages/CallAction';
import WhatWeDo from './pages/WhatWeDo';
import Unnamed from './pages/Unnamed';
import Team from './pages/Team';
import Process from './pages/Process';
import FAQ from './pages/FAQ';
import Brand from './pages/Brand';
import Blog from './pages/Blog';
import Subscribe from './pages/Subscribe';
import Copyright from './pages/Copyright';

function App() {
  return (
    <div className="App">
      <PreLoader />
      <Navbar />
      <Header />
      <a href="#" class="scrollToTop"><i class="fa fa-angle-double-up"></i></a>
      <About />
      <Service />
      <Reached />
      <CallAction />
      <WhatWeDo />
      <Unnamed />
      <Team />
      <Process />
      <FAQ />
      <Brand />
      <Blog />
      <Subscribe />
      <KFooter />
      <Copyright />
    </div>
  );
}

export default App;
