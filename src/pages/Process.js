import React, { Component } from 'react'

class Process extends Component {
    render() {
        return (
            <section className="section section-resume" id="resume">
                <div className="container">
                    <div className="section-head">
                        <span>My Resume</span>
                        <h2>My Expertises</h2>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-6 col-lg-6">
                            <h5 className="section-subHead mt-3"> My Experience</h5>
                            <div className="resume-list b-box hover-state p-4 mt-4">
                                <div>
                                    <h5>Senior Architect</h5>
                                    <h6 className="badge badge-dark d-inline-block my-3">2015 - Present | Google</h6>
                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                </div>
                            </div>
                            <div className="resume-list b-box hover-state p-4 mt-4">
                                <div>
                                    <h5>Front-end Developer</h5>
                                    <h6 className="badge badge-dark d-inline-block my-3">2013 - 2015 | Facebook Inc.</h6>
                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                </div>
                            </div>
                            <div className="resume-list b-box hover-state p-4 mt-4">
                                <div>
                                    <h5>UI Developer</h5>
                                    <h6 className="badge badge-dark d-inline-block my-3">2011 - 2013 | Envato.</h6>
                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-6">
                            <h5 className="section-subHead mt-3"> My Education</h5>
                            <div className="resume-list b-box hover-state p-4 mt-4">
                                <div>
                                    <h5>Master in Arts</h5>
                                    <h6 className="badge badge-dark d-inline-block my-3">2006-2008</h6>
                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                </div>
                            </div>
                            <div className="resume-list b-box hover-state p-4 mt-4">
                                <div>
                                    <h5>Art University</h5>
                                    <h6 className="badge badge-dark d-inline-block my-3">2006-2008</h6>
                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                </div>
                            </div>
                            <div className="resume-list b-box hover-state p-4 mt-4">
                                <div>
                                    <h5>Art University</h5>
                                    <h6 className="badge badge-dark d-inline-block my-3">2006-2008</h6>
                                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-6 col-lg-6">
                            <h5 className="section-subHead mt-3"> Design Skills</h5>
                            <div className="resume-panel b-box hover-state p-4 mt-3">

                                <div className="mb-4">
                                    <h6>Graphic Design </h6>
                                    <div className="progress mt-2" style={{height: "7px"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h6>Logo Design</h6>
                                    <div className="progress mt-2" style={{height: "7px"}}>
                                        <div className="progress-bar" role="progressbar"  style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h6>Logo Design</h6>
                                    <div className="progress mt-2" style={{height: "7px"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="mb-0">
                                    <h6>Photoshop &amp; Figma</h6>
                                    <div className="progress mt-2" style={{height: "7px"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <h5 className="section-subHead mt-3"> Coding Skills</h5>
                            <div className="resume-list b-box hover-state p-4 mt-3">
                                <div className="mb-4">
                                    <h6>RWD</h6>
                                    <div className="progress mt-2" style={{height: "7px"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h6>Bootstrap</h6>
                                    <div className="progress mt-2" style={{height: "7px"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h6>Jekyll</h6>
                                    <div className="progress mt-2" style={{height: "7px"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className="mb-0">
                                    <h6>Javascript</h6>
                                    <div className="progress mt-2" style={{height: "7px"}}>
                                        <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
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

export default Process
