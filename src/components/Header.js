import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

const Header = () => (
<Navbar bg="dark" variant="dark" fixed="top" style={{marginBottom: "10px"}}>
    <Navbar.Brand href="#home">Recommendation</Navbar.Brand>
</Navbar>);

export default Header;