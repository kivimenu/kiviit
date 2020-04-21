import React, { Component } from 'react'

class Team extends Component {
    render() {
        return (
            <section className="team-section ptb-120" id="team">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-header">
                                <span className="title-border">
                                    <img src="assets/images/banner/corona1.png" alt="shape" />
                                </span>
                                <h2 className="section-title">Our Top Doctors</h2>
                                <p>Suspendisse Lectus Vivamus Donec Turpis Egestas, Sed At Massa Orci, Et Nibh Massa Augue Fermentum Arcu, Potenti Tellus Praesent Integer Aliquam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center ml-b-30">
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="assets/images/team/team-1.jpg" alt="team" />
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="#0">Ruddra Khan</a></h3>
                                    <span>Cardiologist</span>
                                </div>
                                <ul className="team-social">
                                    <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#0"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="assets/images/team/team-2.jpg" alt="team" />
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="#0">Salman Pranto</a></h3>
                                    <span>Virus Expert</span>
                                </div>
                                <ul className="team-social">
                                    <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#0"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <img src="assets/images/team/team-3.jpg" alt="team" />
                                </div>
                                <div className="team-content">
                                    <h3 className="title"><a href="#0">Shahidul Islam</a></h3>
                                    <span>Cheif Consultant</span>
                                </div>
                                <ul className="team-social">
                                    <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#0"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team
