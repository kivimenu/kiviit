import React, { Component } from 'react'

class Blog extends Component {
    render() {
        return (
            <section className="section section-dark section-blog" id="blog">
                <div className="container">
                    <div className="section-head">
                        <span>KiviIT Blog</span>
                        <h2>Blog</h2>
                    </div>
                    <div className="mt-5">
                        <div className="swiper-container swiper-blog swiper-container-initialized swiper-container-horizontal">
                            <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                <a href="#" className="swiper-slide blog-list b-box hover-state d-block mb-4 swiper-slide-active" style={{marginRight: "30px", backgroundPosition: "50% -407px"}}>
                                    <div className="blog-list--img">
                                        <img src="https://www.beingeorge.com/klee/assets/images/blog-1.jpg" alt="Blog Image" className="img-fluid" />
                                        <div className="blog-list--details d-flex justify-content-center align-items-center">
                                            <div className="blog-list--details-in">
                                                <p className="blog-by text-white">Alice Joseph</p>
                                                <span className="blog-duration text-white">2 Mins Read</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-list--desc p-3">
                                        <p>10 tips for drawing with coloured pencils</p>
                                        <span className="font-weight-bold mt-3 d-block text-center blog-cat">Design</span>
                                    </div>
                                </a>
                                <a href="#" className="swiper-slide blog-list b-box hover-state d-block mb-4 swiper-slide-next" style={{marginRight: "30px", backgroundPosition: "50% -407px"}}>
                                    <div className="blog-list--img">
                                        <img src="https://www.beingeorge.com/klee/assets/images/blog-2.jpg" alt="Blog Image" className="img-fluid" />
                                        <div className="blog-list--details d-flex justify-content-center align-items-center">
                                            <div className="blog-list--details-in">
                                                <p className="blog-by text-white">Alice Joseph</p>
                                                <span className="blog-duration text-white">2 Mins Read</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-list--desc p-3">
                                        <p>The single greatest gift to get your friend who always travels</p>
                                        <span className="font-weight-bold mt-3 d-block text-center blog-cat">Design</span>
                                    </div>
                                </a>
                                <a href="#" className="swiper-slide blog-list b-box hover-state d-block mb-4" style={{marginRight: "30px", backgroundPosition: "50% -407px"}}>
                                    <div className="blog-list--img">
                                        <img src="https://www.beingeorge.com/klee/assets/images/blog-3.jpg" alt="Blog Image" className="img-fluid" />
                                        <div className="blog-list--details d-flex justify-content-center align-items-center">
                                            <div className="blog-list--details-in">
                                                <p className="blog-by text-white">Alice Joseph</p>
                                                <span className="blog-duration text-white">2 Mins Read</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-list--desc p-3">
                                        <p>Why all women should eat alone </p>
                                        <span className="font-weight-bold mt-3 d-block text-center blog-cat">Design</span>
                                    </div>
                                </a>
                                <a href="#" className="swiper-slide blog-list b-box hover-state d-block mb-4" style={{marginRight: "30px", backgroundPosition: "50% -407px"}}>
                                    <div className="blog-list--img">
                                        <img src="https://www.beingeorge.com/klee/assets/images/blog-1.jpg" alt="Blog Image" className="img-fluid" />
                                        <div className="blog-list--details d-flex justify-content-center align-items-center">
                                            <div className="blog-list--details-in">
                                                <p className="blog-by text-white">Alice Joseph</p>
                                                <span className="blog-duration text-white">2 Mins Read</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-list--desc p-3">
                                        <p>Drawing with coloured pencils</p>
                                        <span className="font-weight-bold mt-3 d-block text-center blog-cat">Travel</span>
                                    </div>
                                </a>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Blog
