import React from 'react';
import './HomePageLoading.css'

const HomePageLoading = () => {
    return (
        <div className="preloader preloader-deactivate">
            <div id="global">
                <div id="top" className="mask">
                    <div className="plane"></div>
                </div>
                <div id="middle" className="mask">
                    <div className="plane"></div>
                </div>
                <div id="bottom" className="mask">
                    <div className="plane"></div>
                </div>
                <p><i>LOADING...</i></p></div>
        </div>
    );
};

export default HomePageLoading;