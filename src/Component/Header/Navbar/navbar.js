import React from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../../../assets/image/white_logo.png';
import MyComponent from '../../Sidenav/sidenav'

const Navy = (props) => {

    return(
       
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 50px'}}>
         <Navbar.Brand href="#"><img src={logo} style={{width: '40px'}} alt="logo"/></Navbar.Brand>
            <MyComponent />
        </Navbar>
    )
}

export default Navy;