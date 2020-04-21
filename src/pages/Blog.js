import React, { Component } from 'react'

class Blog extends Component {
    render() {
        return (
            <section className="blog-section ptb-120" id="blog">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-header">
                                <span className="title-border">
                                    <img src="assets/images/banner/corona1.png" alt="shape" />
                                </span>
                                <h2 className="section-title">Our Latest Blog</h2>
                                <p>Suspendisse Lectus Vivamus Donec Turpis Egestas, Sed At Massa Orci, Et Nibh Massa Augue Fermentum Arcu, Potenti Tellus Praesent Integer Aliquam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center ml-b-30">
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="blog-item text-center">
                                <div className="blog-thumb">
                                    <img src="assets/images/blog/blog-1.jpg" alt="blog" />
                                </div>
                                <div className="blog-content">
                                    <h3 className="title"><a href="#0">Eligendi error impedit cumque facere dignissimos incidunt</a></h3>
                                    <div className="blog-btn">
                                        <a href="#0" className="btn-white">Read More<i className="flaticon-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="blog-item text-center">
                                <div className="blog-thumb">
                                    <img src="assets/images/blog/blog-2.jpg" alt="blog" />
                                </div>
                                <div className="blog-content">
                                    <h3 className="title"><a href="#0">Accusamus laudantium nisi laborum aut dicta unde</a></h3>
                                    <div className="blog-btn">
                                        <a href="#0" className="btn-white">Read More<i className="flaticon-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 mrb-30">
                            <div className="blog-item text-center">
                                <div className="blog-thumb">
                                    <img src="assets/images/blog/blog-3.jpg" alt="blog" />
                                </div>
                                <div className="blog-content">
                                    <h3 className="title"><a href="#0">Quae adipisci voluptatem li bero facere vitae nesciunt</a></h3>
                                    <div className="blog-btn">
                                        <a href="#0" className="btn-white">Read More<i className="flaticon-right"></i></a>
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

export default Blog
