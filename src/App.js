import React from 'react';

//components
import Navbar from './components/Navbar';
import Header from './components/Header';

// pages
import PreLoader from './pages/Preloader'
import About from './pages/About';
import Service from './pages/Service';
import Reached from './pages/Reached';
import CallAction from './pages/CallAction';

function App() {
  return (
    <div className="App">
      <PreLoader />
      <Navbar />
      <Header />
      {/* <a href="#" class="scrollToTop"><i class="fa fa-angle-double-up"></i></a> */}
      <About />
      <Service />
      <Reached />
      <CallAction />
    </div>
  );
}

export default App;
