import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <section className="section-home " id="home" style={{backgroundPosition: "50% 90px"}}>
                <div className="glass">Alice Joseph</div>
                <img src="assets/images/banner.jpg" alt="headers" />
            </section>
        )
    }
}

export default Header
