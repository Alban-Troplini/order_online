import React from 'react';
import Navbar from './Navbar/navbar';
import Slider from './Slider/slider';
import Button from 'react-bootstrap/Button';




const Header = (props) => {

    return( 
    <div>
        <Navbar />
        <Slider /> 
        <div style={{background: '#cbc0d3', marginTop: '30px'}}>
                    <Button variant="info"
                       
                    >Open Menu</Button></div>
    </div>
    )
}

export default Header;