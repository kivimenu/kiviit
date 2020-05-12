import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        return (
            <section className="section section-dark section-work" id="work">
                <div className="container">
                    <div className="section-head text-center">
                        <span>Projects</span>
                        <h2>KiviIT Projects</h2>
                    </div>
                </div>


                <div className="container">

                    <ul id="filter">
                        <li className="active" data-group="all">All</li>
                        <li data-group="slideshow">Slideshow</li>
                        <li data-group="video">Video</li>
                        <li data-group="image">Image</li>
                    </ul>

                    <ul className="list-items-container row images-loaded shuffle" style={{height: "1069.17px", transition: "height 250ms ease-out 0s"}}>

                        <li className="col-md-4 list-item shuffle-item filtered" data-groups="all slideshow" style={{position: "absolute", top: "0px", left: "0px", transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)", opacity: "1", transition:" transform 250ms ease-out 0s, opacity 250ms ease-out 0s"}}>
                            <figure>
                                <img src="https://www.beingeorge.com/klee/assets/images/p1-1.jpg" alt="p1" />
                                <figcaption>
                                    <a href="assets/images/p1-1.jpg" className="simple-ajax-popup"></a>
                                    <div className="caption-inner">
                                        <h3 className="portfolio-item-title">Some work</h3>
                                        <div className="portfolio-item-desc">Slideshow</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>

                        <li className="col-md-4 list-item shuffle-item filtered" data-groups="all video" style={{position: "absolute", top: "0px", left: "0px", transform: "translate3d(360px, 0px, 0px) scale3d(1, 1, 1)", opacity: "1", transition: "transform 250ms ease-out 0s, opacity 250ms ease-out 0s"}}>
                            <figure>
                                <img src="https://www.beingeorge.com/klee/assets/images/p2-2.jpg" alt="p2" />
                                <figcaption>
                                    <a href="assets/images/p2-2.jpg" className="simple-ajax-popup"></a>
                                    <div className="caption-inner">
                                        <h3 className="portfolio-item-title">Some work</h3>
                                        <div className="portfolio-item-desc">Video</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>

                        <li className="col-md-4 list-item shuffle-item filtered" data-groups="all image" style={{position: "absolute", top:" 0px", left: "0px", transform: "translate3d(720px, 0px, 0px) scale3d(1, 1, 1)", opacity: "1", transition: "transform 250ms ease-out 0s, opacity 250ms ease-out 0s"}}>
                            <figure>
                                <img src="https://www.beingeorge.com/klee/assets/images/p3-3.jpg" alt="p3" />
                                <figcaption>
                                    <a href="https://www.beingeorge.com/klee/assets/images/p3-3.jpg" className="simple-ajax-popup"></a>
                                    <div className="caption-inner">
                                        <h3 className="portfolio-item-title">Some work</h3>
                                        <div className="portfolio-item-desc">Image</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>

                        <li className="col-md-4 list-item shuffle-item filtered" data-groups="all slideshow" style={{position: "absolute", top: "0px", left: "0px", transform: "translate3d(360px, 294px, 0px) scale3d(1, 1, 1)", opacity: "1", transition: "transform 250ms ease-out 0s, opacity 250ms ease-out 0s"}}>
                            <figure>
                                <img src="https://www.beingeorge.com/klee/assets/images/p4-4.jpg" alt="p4" />
                                <figcaption>
                                    <a href="assets/images/p4-4.jpg" className="simple-ajax-popup"></a>
                                    <div className="caption-inner">
                                        <h3 className="portfolio-item-title">Some work</h3>
                                        <div className="portfolio-item-desc">Slideshow</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>

                        <li className="col-md-4 list-item shuffle-item filtered" data-groups="all video" style={{position: "absolute", top: "0px", left: "0px", transform: "translate3d(0px, 443px, 0px) scale3d(1, 1, 1)", opacity: "1", transition: "transform 250ms ease-out 0s, opacity 250ms ease-out 0s"}}>
                            <figure>
                                <img src="https://www.beingeorge.com/klee/assets/images/p5-5.jpg" alt="p5" />
                                <figcaption>
                                    <a href="assets/images/p5-5.jpg" className="simple-ajax-popup"></a>
                                    <div className="caption-inner">
                                        <h3 className="portfolio-item-title">Some work</h3>
                                        <div className="portfolio-item-desc">Video</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>

                        <li className="col-md-4 list-item shuffle-item filtered" data-groups="all image" style={{position: "absolute", top:" 0px", left: "0px", transform: "translate3d(720px, 551px, 0px) scale3d(1, 1, 1)", opacity: "1", transition: "transform 250ms ease-out 0s, opacity 250ms ease-out 0s"}}>
                            <figure>
                                <img src="https://www.beingeorge.com/klee/assets/images/p6-6.jpg" alt="p6" />
                                <figcaption>
                                    <a href="assets/images/p6-6.jpg" className="simple-ajax-popup"></a>
                                    <div className="caption-inner">
                                        <h3 className="portfolio-item-title">Some work</h3>
                                        <div className="portfolio-item-desc">Image</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>

                        <li className="col-md-4 list-item shuffle-item filtered" data-groups="all image" style={{position: "absolute", top: "0px", left: "0px", transform: "translate3d(720px, 801px, 0px) scale3d(1, 1, 1)", opacity: "1", transition: "transform 250ms ease-out 0s, opacity 250ms ease-out 0s"}}>
                            <figure>
                                <img src="https://www.beingeorge.com/klee/assets/images/p8-8.jpg" alt="p6" />
                                <figcaption>
                                    <a href="assets/images/p7-7.jpg" className="simple-ajax-popup"></a>
                                    <div className="caption-inner">
                                        <h3 className="portfolio-item-title">Some work</h3>
                                        <div className="portfolio-item-desc">Image</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>

                        <li className="col-md-4 list-item shuffle-item filtered" data-groups="all image" style={{position: "absolute", top: "0px", left: "0px", transform: "translate3d(360px, 818px, 0px) scale3d(1, 1, 1)", opacity: "1", transition: "transform 250ms ease-out 0s, opacity 250ms ease-out 0s"}}>
                            <figure>
                                <img src="https://www.beingeorge.com/klee/assets/images/p7-7.jpg" alt="p6" />
                                <figcaption>
                                    <a href="assets/images/p8-8.jpg" className="simple-ajax-popup"></a>
                                    <div className="caption-inner">
                                        <h3 className="portfolio-item-title">Some work</h3>
                                        <div className="portfolio-item-desc">Image</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>

                    </ul>
                </div>
            </section>
        )
    }
}

export default Projects
