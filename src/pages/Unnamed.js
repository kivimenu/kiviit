import React, { Component } from 'react'

class Unnamed extends Component {
    render() {
        return (
            <section className="section section-light section-testimony" id="testimony">
                <div className="container">
                    <div className="section-head text-center">
                        <span>Kind Words</span>
                        <h2>testimonial</h2>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="swiper-container swiper-testimony swiper-container-initialized swiper-container-horizontal">
                                <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                    <div className="swiper-slide single-testimonials swiper-slide-active" style={{width: "1080px", marginRight: "30px", backgroundPosition: "50% -750px"}}>
                                        <div className="single-testimonials-in text-center p-4 b-box mx-auto">
                                            <img src="https://www.beingeorge.com/klee/assets/images/avatar1.jpg" alt="" className="mx-auto b-box" />
                                            <p className="mt-4 text-center">"Kivi"</p>
                                            <span className="font-weight-bold mt-3 d-block">- X, Web Developer</span>
                                        </div>
                                    </div>
{/* 
                                    <div className="swiper-slide single-testimonials swiper-slide-next" style={{width: "1080px", marginRight: "30px", backgroundPosition: "50% -750px"}}>
                                        <div className="single-testimonials-in text-center p-4 b-box mx-auto">
                                            <img src="assets/images/avatar1.jpg" alt="" className="mx-auto b-box" />
                                            <p className="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin.  Mustache cliche tempor, williamsburg carles vegan helvetica."</p>
                                            <span className="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
                                        </div>
                                    </div>

                                    <div className="swiper-slide single-testimonials" style={{width: "1080px", marginRight: "30px", backgroundPosition: "50% -750px"}}>
                                        <div className="single-testimonials-in text-center p-4 b-box mx-auto">
                                            <img src="assets/images/avatar1.jpg" alt="" className="mx-auto b-box" />
                                            <p className="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                                            <span className="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
                                        </div>
                                    </div> */}

                                    <div className="swiper-slide single-testimonials" style={{width: "1080px", marginRight: "30px", backgroundPosition: "50% -750px"}}>
                                        <div className="single-testimonials-in text-center p-4 b-box mx-auto">
                                            <img src="assets/images/avatar1.jpg" alt="" className="mx-auto b-box" />
                                            <p className="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                                            <span className="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
                                        </div>
                                    </div>

                                    <div className="swiper-slide single-testimonials" style={{width: "1080px", marginRight: "30px", backgroundPosition: "50% -750px"}}>
                                        <div className="single-testimonials-in text-center p-4 b-box mx-auto">
                                            <img src="assets/images/avatar1.jpg" alt="" className="mx-auto b-box" />
                                            <p className="mt-4 text-center">"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                                            <span className="font-weight-bold mt-3 d-block">- Anj Joseph, Web Developer</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="swiper-pagination"></div>
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

                            <div className="testimony-nav">
                                <a href="#" className="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></a>
                                <a href="#" className="swiper-button-prev swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Unnamed
