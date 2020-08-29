import React from 'react';
import './Newletter.css'

const Newsletter = () => {
    return (
            <div className="row">
                <div className="col-md-5 subscribe">
                    <h3>Join Our Newsletter</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="col-md-7">
                    <div className="subscribe-form">
                        <form className="newsletter-form">
                            <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" />
                            <button type="submit">
                                <span>Subscribe </span>
                                <span className="hide-mobile">Now</span>
                                <i className="fa fa-angle-right hide-mobile" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Newsletter;