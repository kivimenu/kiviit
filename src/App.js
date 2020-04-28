import React, { Component } from 'react';

import './assets/css/custom.css'
import './assets/css/kivi.css';
import './assets/css/vendor.css';

//components
import Navbar from './components/Navbar';
import Header from './components/Header';
import KFooter from './components/KFooter';

// pages
import PreLoader from './pages/Preloader'
import About from './pages/About';
import Projects from './pages/Projects';
import Unnamed from './pages/Unnamed';
import Process from './pages/Process';
import Brand from './pages/Brand';
import Blog from './pages/Blog';
import Subscribe from './pages/Subscribe';
import Services from './pages/Services';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <div className="page-wrapper">
        <PreLoader />
        <Navbar toggleState={this.state.toggle} toggleNavbar={this.toggleNavbar} />
        <Header />
        <About />
        <Services />
        <Process />
        <Projects />
        <Unnamed />
        <Subscribe />
        <Blog />
        <Brand />
        <KFooter />
      </div>
    );
  }
}

export default App;
