import React, { Component } from 'react';

//components
import Navbar from './components/Navbar';
import Header from './components/Header';
import KFooter from './components/KFooter';

// pages
import PreLoader from './pages/Preloader'
import About from './pages/About';
import Projects from './pages/Projects';
import WhatWeDo from './pages/WhatWeDo';
import Unnamed from './pages/Unnamed';
import Team from './pages/Team';
import Process from './pages/Process';
import FAQ from './pages/FAQ';
import Brand from './pages/Brand';
import Blog from './pages/Blog';
import Subscribe from './pages/Subscribe';
import Copyright from './pages/Copyright';
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
    return  (
      <div className="App">
        <Navbar toggleState={this.state.toggle} toggleNavbar={this.toggleNavbar} />
        <Header />
        <About />
        <Services />
        <Process />
        <Projects />
        {/*
        <WhatWeDo />
        <Unnamed />
        <Team />
        <FAQ />
        <Brand />
        <Blog />
        <Subscribe />
        <KFooter />
        <Copyright /> */}
      </div>
    );
  }
}

export default App;
