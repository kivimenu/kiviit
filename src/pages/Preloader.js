import React, { Component } from 'react'

class Preloader extends Component {
    render() {
        return (
            <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

        )
    }
}
export default Preloader;