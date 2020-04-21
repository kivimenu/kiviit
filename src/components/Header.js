import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <section className="banner-section">
                    <div className="banner-element">
                        <img src="assets/images/banner/corona1.png" alt="banner" />
                    </div>
                    <div className="banner-element-two">
                        <img src="assets/images/banner/corona1.png" alt="banner" />
                    </div>
                    <div className="banner-element-three">
                        <img src="assets/images/banner/corona1.png" alt="banner" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner-content">
                                    <h2 className="title">Lorem ipsum dolorum ques</h2>
                                    <p>Debitis laudantium, modi ad similique corporis expedita repellendus odio, nihil nemo quaerat velit sed eaque consectetur rerum voluptates perspiciatis voluptatum illum aperiam dolorum quas ex mollitia aliquam! Ipsam beatae recusandae maiores</p>
                                    <div className="banner-btn">
                                        <a href="#0" className="btn-white-two"><i className="fas fa-user"></i>How To Protect</a>
                                        <a href="https://www.youtube.com/watch?v=jrfRs0WeShU" className="btn-white-two popup-youtube mfp-iframe"><i className="fas fa-play"></i>Watch Video</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="particles"></div>
                </section>
            </div>
        )
    }
}

export default Header
