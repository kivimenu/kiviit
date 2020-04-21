import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <section className="about-section pd-t-120" id="about">
                <div className="container">
                    <div className="row justify-content-center ml-b-30">
                        <div className="col-lg-5 mrb-30">
                            <div className="about-thumb-area">
                                <div className="about-thumb">
                                    <img src="assets/images/about.jpg" alt="about" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 mrb-30">
                            <div className="about-content-area">
                                <span className="sub-title">About The Desease</span>
                                <h3 className="title">Basically We Should Follow The Advice From Healhcare</h3>
                                <div className="about-item-area ml-b-60">
                                    <div className="about-item d-flex flex-wrap align-items-center mrb-60">
                                        <div className="about-icon">
                                            <i className="fas fa-home"></i>
                                        </div>
                                        <div className="about-item-content">
                                            <h3 className="item-title">Stay At Home</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi quasi voluptatum eaque dolores?</p>
                                        </div>
                                    </div>
                                    <div className="about-item d-flex flex-wrap align-items-center mrb-60">
                                        <div className="about-icon">
                                            <i className="fas fa-ambulance"></i>
                                        </div>
                                        <div className="about-item-content">
                                            <h3 className="item-title">Be Supportive</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi quasi voluptatum eaque dolores?</p>
                                        </div>
                                    </div>
                                    <div className="about-item d-flex flex-wrap align-items-center mrb-60">
                                        <div className="about-icon">
                                            <i className="fas fa-unlock-alt"></i>
                                        </div>
                                        <div className="about-item-content">
                                            <h3 className="item-title">Protect Yourself</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi quasi voluptatum eaque dolores?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
