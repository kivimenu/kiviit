import React, { Component } from 'react'

class CallAction extends Component {
    render() {
        return (
            <section className="call-to-action-section call-to-action-section-two call-to-action-section-three ptb-120" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="call-to-action-content">
                                <h3 className="title">Contact With Your Local Healthcare Emergency</h3>
                                <span className="sub-title">Emergency Call Us : <a href="tel:123456789"><i className="fas fa-mobile-alt"></i>123456789</a></span>
                                <div className="call-btn">
                                    <a href="#0" className="btn-white-two">Contact With Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CallAction
