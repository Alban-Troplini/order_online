import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/image/1.jpg';
import img2 from '../../../assets/image/2.jpg';
import img3 from '../../../assets/image/3.jpg';



const Slider = (props) => {

    const img = [
        {img: img1, h3: "Image 1", p: "This is the first image"},
        {img: img2, h3: "Image 2", p: "This is the second image"},
        {img: img3, h3: "Image 3", p: "This is the third image"}
    ];

    const image = img.map((image, index) => {  
    return (

          <Carousel.Item interval={2500}
                        key={index}
                        style={{ maxHeight: '200px'}}>
                <img
                    className="d-block w-100"
                    src={image.img}
                    style={{}}
                    />
                <Carousel.Caption>
                    <h3 style={{color: '#2a9d8f'}}>{image.h3}</h3>
                    <p style={{color: '#ffb703'}}>{image.p}</p>
                </Carousel.Caption>
            </Carousel.Item>
          
    
        )}
   );

    return (

        <Carousel>
            {image}
        </Carousel>

    )
}

export default Slider;