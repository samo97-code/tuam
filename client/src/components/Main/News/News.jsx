import React from 'react';
import "./News.css"
import Button from "../../main_components/Button/Button";

const News = () => {
    return (
        <section className="new-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 team-title">
                        <h2>News and Insights</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <div className="image-block">
                                <img src="/images/news/news1.jpg" alt=""/>
                            </div>
                            <div className="description">
                                <h4>Why Business Absolutely Needs a Virtual Office</h4>
                                <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <Button />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <div className="image-block">
                                <img src="/images/news/news1.jpg" alt=""/>
                            </div>
                            <div className="description">
                                <h4>Why Business Absolutely Needs a Virtual Office</h4>
                                <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <Button />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <div className="image-block">
                                <img src="/images/news/news1.jpg" alt=""/>
                            </div>
                            <div className="description">
                                <h4>Why Business Absolutely Needs a Virtual Office</h4>
                                <p>Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;