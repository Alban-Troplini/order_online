import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from '../../../assets/image/white_logo.png';

const Navy = (props) => {

    return(
       
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#"><img src={logo} style={{width: '40px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to="/">Home</Nav.Link>
                    <Nav.Link to="/profile">Profile</Nav.Link>
                </Nav>
             
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navy;