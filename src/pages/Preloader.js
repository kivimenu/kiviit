import React, { Component } from 'react'

class Preloader extends Component {
    render() {
        return (
            <div id="preloader" class="preloader loaded">
                <div class="spinner-grow text-dark" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

        )
    }
}
export default Preloader;