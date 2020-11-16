import React, { useState } from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../../../assets/image/white_logo.png';
import bag from '../../../assets/icons/bag.png';
import MyComponent from '../../Sidenav/sidenav';

const Navy = (props) => {

    return(
       
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 50px'}}>
         <MyComponent />
         <Navbar.Brand href="#"><img src={logo} style={{width: '40px'}} alt="logo"/></Navbar.Brand>
            <div style={{display: 'block', cursor: 'pointer'}} >
                <span  style={{position: 'absolute', right: '58px', top: '18px', fontSize: '25px'}}>{props.addItem}</span> 
                <img src={bag} alt="bag" style={{width: '40px'}}/> 
             </div> 
        </Navbar>
    )
}

export default Navy;