import React, {useEffect, useState} from 'react';
import './Navbar.css';
import {Navbar,Nav} from 'react-bootstrap';


const Header = () => {
    const [stikyHeader,setHeaderStiky] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    })

    const handleScroll = (event)=> {
        if (window.scrollY >= 130){
            setHeaderStiky(true)
        }else{
            setHeaderStiky(false)
        }
    }


    return (
        <div className={`tuamNav ${stikyHeader ? "stiky" : ""}`}>
            <div className="container">
                <div className="row">
                    <Navbar  expand="lg" className="w-100">
                        <Navbar.Brand href="#home">
                            <img src="data:image/png;base64,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"  alt=""
                                 loading="lazy" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="my-2 my-lg-0">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link1">About</Nav.Link>
                                <Nav.Link href="#link2">The Place</Nav.Link>
                                <Nav.Link href="#link3">Pages</Nav.Link>
                                <Nav.Link href="#link4">News</Nav.Link>
                                <Nav.Link href="#link5">Contact</Nav.Link>
                                <Nav className="call-us">
                                    <div>
                                        <p className="image">
                                            <span><img src="../images/icons/call.png" alt=""/></span>
                                        </p>
                                        <p className="number">
                                            <span>Call Us:</span>
                                            <span>+1 518 285679</span>
                                        </p>
                                    </div>
                                </Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </div>
            </div>
        </div>
    );
};

export default Header;