import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <section className="section section-about" id="about">
                <div className="container">
                    <div className="section-head">
                        <span>Get to know</span>
                        <h2>About Me</h2>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-5">
                            <img className="img-fluid img-thumbnail" src={require("../img/about.png")} alt="About Picture" />
                        </div>
                        <div className="col-md-7">
                            <div className="about-desc">
                                <div className="about-desc-content">
                                    <h1 className="font-weight-light">I'm Alice Joseph</h1>
                                    <p className="mt-3 font-weight-light">Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum.</p>
                                </div>

                                <div className="about-desc-more text-left mt-5">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="about-desc-info">
                                                <i className="far fa-calendar-alt" data-toggle="tooltip" data-placement="top" title="Age"></i>
                                                <b>Age : </b>
                                                <span>19</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="about-desc-info">
                                                <i className="fas fa-map-marked-alt" data-toggle="tooltip" data-placement="top" title="Location"></i>
                                                <b>Location : </b>
                                                <span>Miami, FL</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="about-desc-info">
                                                <i className="fas fa-graduation-cap" data-toggle="tooltip" data-placement="top" title="Degree"></i>
                                                <b>Degree : </b>
                                                <span>Master</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="about-desc-info">
                                                <i className="fab fa-skype" data-toggle="tooltip" data-placement="top" title="Skype"></i>
                                                <b>Skype : </b>
                                                <a href="tel:beingeorge">beingeorge</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="about-desc-info">
                                                <i className="fas fa-phone-alt" data-toggle="tooltip" data-placement="top" title="Phone"></i>
                                                <b>Phone : </b>
                                                <a href="tel:0987654321">098-765-4321</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="about-desc-info">
                                                <i className="far fa-envelope" data-toggle="tooltip" data-placement="top" title="Mail"></i>
                                                <b>Mail : </b>
                                                <a href="mailto:hello@beingeorge.com">hello@beingeorge.com</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <ul className="about-social mb-0 list-inline mt-4">
                                    <li className="list-inline-item">
                                        <a href="#" className="btn downloadCV hover-state">
                                            <i className="fas fa-download"></i>
                                            <span>Download CV</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
