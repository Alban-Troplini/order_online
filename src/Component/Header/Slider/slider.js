import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



const Slider = () => {

    const img = [
        {img: "https://coverfiles.alphacoders.com/143/143063.jpg", h3: "Image 1", p: "This is the first image"},
        {img: "https://coverfiles.alphacoders.com/481/48117.jpg", h3: "Image 2", p: "This is the second image"},
        {img: "https://coverfiles.alphacoders.com/139/139618.jpg", h3: "Image 3", p: "This is the third image"}
    ];

    const image = img.map((image, index) => {  
    return (

          <Carousel.Item interval={2500}
                        key={index}
                        style={{ maxHeight: '300px'}}>
                <img
                    className="d-block w-100"
                    src={image.img}
                    alt="cover"
                    />
            
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