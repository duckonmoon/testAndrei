import React from "react";
import Navbar from 'react-bootstrap/Navbar'

const Footer = () => (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="bottom">
        <div style={{
            float: "left",
            textAlign: "center",
            width: "100%"
        }}>
            <Navbar.Brand style={{
                float: "none"
            }}>@Made by rkrit</Navbar.Brand>
        </div>
    </Navbar>
);

export default Footer;