import React, { Component } from 'react'

export class Service extends Component {
    render() {
        return (
            <section className="service-section pd-t-120" id="symptoms">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-header">
                                <span className="title-border">
                                    <img src="assets/images/banner/corona1.png" alt="shape" />
                                </span>
                                <h2 className="section-title">Virus Symptoms</h2>
                                <p>Suspendisse Lectus Vivamus Donec Turpis Egestas, Sed At Massa Orci, Et Nibh Massa Augue Fermentum Arcu, Potenti Tellus Praesent Integer Aliquam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center ml-b-30">
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="service-item">
                                <div className="service-thumb">
                                    <img src="assets/images/symptoms/symptoms-6.jpg" alt="symptoms" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title">Hot Fever</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="service-item">
                                <div className="service-thumb">
                                    <img src="assets/images/symptoms/symptoms-2.jpg" alt="symptoms" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title">Sore Throat</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="service-item">
                                <div className="service-thumb">
                                    <img src="assets/images/symptoms/symptoms-3.jpg" alt="symptoms" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title">Shortness Of Breath</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="service-item">
                                <div className="service-thumb">
                                    <img src="assets/images/symptoms/symptoms-1.jpg" alt="symptoms" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title">Strong Headache</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="service-item">
                                <div className="service-thumb">
                                    <img src="assets/images/symptoms/symptoms-4.jpg" alt="symptoms" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title">Cough And Sneez</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="service-item">
                                <div className="service-thumb">
                                    <img src="assets/images/symptoms/symptoms-5.jpg" alt="symptoms" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title">Tiredness</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mrt-80">
                        <a href="#0" className="btn-white">Load More</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Service
