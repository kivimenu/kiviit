import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div className="header-section header-section-two">
                <div className="header">
                    <div className="header-bottom-area">
                        <div className="container">
                            <div className="header-menu-content">
                                <nav className="navbar navbar-expand-lg p-0" >
                                    <a className="site-logo site-title" href="index.html"><img src="assets/images/logo-2.png" alt="site-logo" /></a>
                                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="fas fa-bars"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav main-menu ml-auto">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#symptoms">Symptoms</a></li>
                                            <li><a href="#prevention">Prevention</a></li>
                                            <li><a href="#team">Team</a></li>
                                            <li><a href="#blog">Blog</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                        </ul>
                                        <div className="search-bar">
                                            <a href="#0"><i className="fas fa-search"></i></a>
                                            <div className="header-top-search-area">
                                                <form className="header-search-form">
                                                    <input type="search" name="header_search" id="header_search" placeholder="Search here..." />
                                                    <button className="header-search-btn"><i className="fas fa-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
