import React from 'react';
import './Button.css'

const Button = (props) => {

    const clickHandler = (event)=>{
        event.preventDefault()
        props.buttonHandler()
    }

    return (
        <>
            <a className="default-btn" href="#" onClick={(event)=>clickHandler(event)}>Book A
                Room <span></span>
            </a>
        </>
    );
};

export default Button;