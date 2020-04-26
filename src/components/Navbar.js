import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        return (
            <aside className="aside">
                <div className="nav-wrapper">

                    <div className="navbar-toggler">
                        <svg className="ham ham2 active" viewBox="0 0 100 100" width="60">
                            <path className="line top" d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"></path>
                            <path className="line middle" d="m 30,50 h 40"></path>
                            <path className="line bottom" d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"></path>
                        </svg>
                    </div>

                    <nav className="navbar text-center align-items-center justify-content-center">

                        <div className="collapse navbar-collapse show" id="navbarCollapse">
                            <div className="about-avatar mb-4">
                                <img src="assets/images/about.jpg" alt="" className="img-fluid mx-auto d-block shadow-sm rounded-full" />
                            </div>
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <a className="nav-link active" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#resume">resume</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#work">Portfolio</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>

                        </div>

                        <div className="aside-footer">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </aside>
        )
    }
}

export default Navbar
