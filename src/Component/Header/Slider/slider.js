import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/image/1.jpg';
import img2 from '../../../assets/image/2.jpg';
import img3 from '../../../assets/image/3.jpg';


const Slider = (props) => {

    return (

        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src={img1}
                />
                <Carousel.Caption>
                <h3 style={{color: '#2a9d8f'}}>First slide label</h3>
                <p style={{color: '#ffb703'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src={img2}
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src={img3}
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
</Carousel>

    )
}

export default Slider;