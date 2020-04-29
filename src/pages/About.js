import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <section className="section section-about" id="about">
                <div className="container">
                    <div className="section-head">
                        <span>Get to know</span>
                        <h2>Who is Kivi IT</h2>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="about-desc">
                                <div className="about-desc-content">
                                    <h1 className="font-weight-light">Kivi IT; </h1>
                                    <p className="mt-3 font-weight-light">Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum.Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum.Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum</p>
                                </div>
                                <ul className="about-social mb-0 list-inline mt-4">
                                    <li className="list-inline-item">
                                        <a href="#" className="btn downloadCV hover-state">
                                            <span>Read more</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
