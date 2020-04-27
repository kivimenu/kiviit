import React, { Component } from 'react'

class Brand extends Component {
    render() {
        return (
            <section className="section section-contact" id="contact">
                <div className="container">
                    <div className="section-head">
                        <span>say Hello</span>
                        <h2>Contact </h2>
                    </div>
                </div>

                <div className="contact-Otherdetails section-dark">
                    <div className="container">
                        <div className="contact-details">
                            <h5 className="section-subHead mb-4"> Get in Touch</h5>
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="contact-details--panel p-4 b-box text-center hover-state">
                                        <div className="mb-3">
                                            <i className="fas fa-mobile-alt  "></i>
                                        </div>
                                        <div className="mt-2">
                                            <a href="tel:9876543210" className="">+987 654 3210</a>
                                            <p className="mt-2">Call Us</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="contact-details--panel p-4 b-box text-center hover-state">
                                        <div className="mb-3">
                                            <i className="fas fa-envelope  "></i>
                                        </div>
                                        <div className="mt-2">
                                            <a href="mailto:hello@beingeorge.com">hello@beingeorge.com</a>
                                            <p className="mt-2">Email Us</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form mt-5">
                            <form>
                                <h5 className="section-subHead mb-2"> Contact Form</h5>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mt-3">
                                            <input name="name" id="name" type="text" className="form-control b-box" placeholder="Your Name*" required="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mt-3">
                                            <input name="email" id="email" type="email" className="form-control b-box" placeholder="Your Email*" required="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control b-box" id="subject" placeholder="Your Subject.." required="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-3">
                                            <textarea name="comments" id="comments" rows="4" className="form-control b-box" placeholder="Your message..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-center mt-4 mb-5 ">
                                        <a href="#" className="btn hover-state">Submit</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Brand
