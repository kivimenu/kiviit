import React, { Component } from 'react'

export class Reached extends Component {
    render() {
        return (
            <section className="contagion-section ptb-120">
                <div className="container">
                    <div className="row justify-content-center ml-b-30">
                        <div className="col-lg-6 mrb-30">
                            <div className="contagion-area">
                                <h3 className="title">Contagion Corona Virus</h3>
                                <p>Voluptatibus unde blanditiis, consequuntur enim iusto saepe</p>
                                <div className="contagion-item-area ml-b-30">
                                    <div className="contagion-item d-flex flex-wrap align-items-center mrb-30">
                                        <div className="contagion-icon">
                                            <i className="fas fa-person-booth"></i>
                                        </div>
                                        <div className="contagion-item-content">
                                            <h3 className="item-title">Human Contact</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi quasi voluptatum eaque dolores?</p>
                                        </div>
                                    </div>
                                    <div className="contagion-item d-flex flex-wrap align-items-center mrb-30">
                                        <div className="contagion-icon">
                                            <i className="fas fa-fan"></i>
                                        </div>
                                        <div className="contagion-item-content">
                                            <h3 className="item-title">Air Transmission</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi quasi voluptatum eaque dolores?</p>
                                        </div>
                                    </div>
                                    <div className="contagion-item d-flex flex-wrap align-items-center mrb-30">
                                        <div className="contagion-icon">
                                            <i className="fas fa-bug"></i>
                                        </div>
                                        <div className="contagion-item-content">
                                            <h3 className="item-title">Contaminated Objects</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi quasi voluptatum eaque dolores?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mrb-30">
                            <div className="counter-area">
                                <div className="row justify-content-center ml-b-30">
                                    <div className="col-lg-6 mrb-30">
                                        <div className="counter-item">
                                            <div className="counter-content">
                                                <div className="odo-area">
                                                    <h3 className="odo-title odometer"
                                                        data-odometer-final="187">0</h3>
                                                </div>
                                            </div>
                                            <p>Total Countries</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mrb-30">
                                        <div className="counter-item">
                                            <div className="counter-content">
                                                <div className="odo-area">
                                                    <h3 className="odo-title odometer"
                                                        data-odometer-final="65595">0</h3>
                                                </div>
                                            </div>
                                            <p>Confirmed Cases</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mrb-30">
                                        <div className="counter-item">
                                            <div className="counter-content">
                                                <div className="odo-area">
                                                    <h3 className="odo-title odometer"
                                                        data-odometer-final="12,120">0</h3>
                                                </div>
                                            </div>
                                            <p>Confirmed Deaths</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mrb-30">
                                        <div className="counter-item">
                                            <div className="counter-content">
                                                <div className="odo-area">
                                                    <h3 className="odo-title odometer"
                                                        data-odometer-final="9563">0</h3>
                                                </div>
                                            </div>
                                            <p>Total Recovered</p>
                                        </div>
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

export default Reached
