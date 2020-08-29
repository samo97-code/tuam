import React from 'react';
import "./Pricing.css"
import Button from "../../main_components/Button/Button";

const Pricing = () => {
    return (
        <section className="pricing-area">
            <div className="container">
                <div className="row">
                    <div className="title col-md-12">
                        <h2 className="text-center">Our Pricing Packages</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="pricing-block col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="heading">
                                        <h3>Coworking</h3>
                                    </div>
                                    <div className="price">
                                        <span>$</span> <span>179</span>
                                    </div>
                                    <div className="button">
                                        <Button  />
                                    </div>
                                    <ul className="list">
                                        <li className="hide">24/7 Access</li>
                                        <li className="show">Cleaning Service</li>
                                        <li className="show">High Speed Wifi/ Internet</li>
                                        <li className="show">Opening Hours (8:00 – 22:00)</li>
                                        <li className="show">Utilities Included</li>
                                        <li className="hide">Access to Kitchen Lounge</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="heading">
                                        <h3>Coworking</h3>
                                    </div>
                                    <div className="price">
                                        <span>$</span> <span>179</span>
                                    </div>
                                    <div className="button">
                                        <Button  />
                                    </div>
                                    <ul className="list">
                                        <li className="show">24/7 Access</li>
                                        <li className="show">Cleaning Service</li>
                                        <li className="show">High Speed Wifi/ Internet</li>
                                        <li className="show">Opening Hours (8:00 – 22:00)</li>
                                        <li className="show">Utilities Included</li>
                                        <li className="show">Access to Kitchen Lounge</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="heading">
                                        <h3>Coworking</h3>
                                    </div>
                                    <div className="price">
                                        <span>$</span> <span>179</span>
                                    </div>
                                    <div className="button">
                                        <Button  />
                                    </div>
                                    <ul className="list">
                                        <li className="show">24/7 Access</li>
                                        <li className="hide">Cleaning Service</li>
                                        <li className="show">High Speed Wifi/ Internet</li>
                                        <li className="show">Opening Hours (8:00 – 22:00)</li>
                                        <li className="hide">Utilities Included</li>
                                        <li className="show">Access to Kitchen Lounge</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;