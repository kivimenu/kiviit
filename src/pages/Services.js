import React, { Component } from 'react'

class Services extends Component {
    render() {
        return (
            <section className="section section-dark section-services" id="services">
                <div className="container">
                    <div className="section-head">
                        <span>WHAT WE DO</span>
                        <h2>Services</h2>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 col-lg-6">
                            <div className="services-list hover-state p-4">
                                <div className="services-list-icon b-box">
                                    <i className="fas fa-paint-brush  "></i>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Graphic Design</h5>
                                    <p className=" mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <div className="services-list hover-state p-4">
                                <div className="services-list-icon b-box">
                                    <i className="fas fa-palette  "></i>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Web Development</h5>
                                    <p className=" mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <div className="services-list hover-state p-4">
                                <div className="services-list-icon b-box">
                                    <i className="fas fa-compact-disc  "></i>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Media Marketing</h5>
                                    <p className=" mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <div className="services-list hover-state p-4">
                                <div className="services-list-icon b-box">
                                    <i className="fa fa-puzzle-piece  " aria-hidden="true"></i>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Advetising</h5>
                                    <p className=" mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <div className="services-list hover-state p-4">
                                <div className="services-list-icon b-box">
                                    <i className="fa fa-gamepad  " aria-hidden="true"></i>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Game Development</h5>
                                    <p className=" mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <div className="services-list hover-state p-4">
                                <div className="services-list-icon b-box">
                                    <i className="far fa-chart-bar  "></i>
                                </div>
                                <div className="mt-4">
                                    <h5 className="mb-0">Analytics</h5>
                                    <p className=" mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;
