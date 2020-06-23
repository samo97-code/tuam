import React, {useState} from 'react';
import './Slider.css';
import SliderBanner from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Modal} from 'react-bootstrap';

const Slider = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    const handleShow = (event) => {
        event.preventDefault()
        setShow(true)
    };


    var settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        margin: 50,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true
    };

    return (
        <div className="slider-banner">
            <SliderBanner {...settings}>
                    <div>
                        <div className="single-slider content-v-center"
                             style={{ backgroundImage: `url(../images/main-banner1-e9dbf517a3d615a2daf4288a20ab9a8d.jpg`}}>
                            <div className="container">
                                <div className="main-banner-content"><span className="sub-title">The Best Workspace in New York</span>
                                    <h1>Professional, Creative, Flexible, Scalable Workspace</h1>
                                    <div className="btn-box"><a className="default-btn" href="#">Book A
                                        Room <span></span></a><a className="optional-btn" href="" onClick={(event)=>handleShow(event)}>
                                        <img src="images/icons/play-button.png" width='21' height="21" alt="" style={{display:'inherit',marginRight:'9px'}}  /> Watch Video</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div>
                    <div className="single-slider content-v-center"
                         style={{ backgroundImage: `url(../images/main-banner1-e9dbf517a3d615a2daf4288a20ab9a8d.jpg`}}>
                        <div className="container">
                            <div className="main-banner-content"><span className="sub-title">The Best Workspace in New York</span>
                                <h1>Professional, Creative, Flexible, Scalable Workspace</h1>
                                <div className="btn-box"><a className="default-btn" href="#">Book A
                                    Room <span></span></a><a className="optional-btn" href="" onClick={(event)=>handleShow}>
                                    <img src="images/icons/play-button.png" width='21' height="21" alt="" style={{display:'inherit',marginRight:'9px'}}  /> Watch Video</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="single-slider content-v-center"
                         style={{ backgroundImage: `url(../images/main-banner1-e9dbf517a3d615a2daf4288a20ab9a8d.jpg`}}>
                        <div className="container">
                            <div className="main-banner-content"><span className="sub-title">The Best Workspace in New York</span>
                                <h1>Professional, Creative, Flexible, Scalable Workspace</h1>
                                <div className="btn-box"><a className="default-btn" href="#">Book A
                                    Room <span></span></a><a className="optional-btn" href="" onClick={(event)=>handleShow}>
                                    <img src="images/icons/play-button.png" width='21' height="21" alt="" style={{display:'inherit',marginRight:'9px'}}  /> Watch Video</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="single-slider content-v-center"
                         style={{ backgroundImage: `url(../images/main-banner1-e9dbf517a3d615a2daf4288a20ab9a8d.jpg`}}>
                        <div className="container">
                            <div className="main-banner-content"><span className="sub-title">The Best Workspace in New York</span>
                                <h1>Professional, Creative, Flexible, Scalable Workspace</h1>
                                <div className="btn-box"><a className="default-btn" href="#">Book A
                                    Room <span></span></a><a className="optional-btn" href="#play-video">
                                    <img src="images/icons/play-button.png" width='21' height="21" alt="" style={{display:'inherit',marginRight:'9px'}} /> Watch Video</a></div>
                            </div>
                        </div>
                    </div>
                </div>


                </SliderBanner>
            <Modal show={show} onHide={handleClose} size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/7yMd_dvPh5g" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Slider;