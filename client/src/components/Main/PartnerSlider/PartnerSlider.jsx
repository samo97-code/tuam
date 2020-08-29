import React from 'react';
import './PartnerSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderServices from "react-slick";

const PartnerSlider = () => {

    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1200,
        autoplay: true,
        draggable: true,
        margin: 250,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    // const partnerSlider

    return (
        <section className="partner-slider">
            <div className="container">
                <div className="row">
                    <h4 className="text-center w-100 mb-4">TRUSTED BY 20,000 COMPANIES</h4>
                    <Slider {...settings}>
                       <div className="image-block">
                           <img src="/images/partner-slider/partner1.png" alt=""/>
                       </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner2.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner3.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner4.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner5.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner6.png" alt=""/>
                        </div>
                        <div className="image-block">
                            <img src="/images/partner-slider/partner7.png" alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PartnerSlider;