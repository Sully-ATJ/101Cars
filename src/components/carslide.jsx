import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

//This is the Carslides Component
//we imported 'Carousel' from react-bootstrap 
//to make the Slider/Carousel of car images

const CarSlides = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <img 
                    className="images"
                    src="https://images.pexels.com/photos/209644/pexels-photo-209644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.pexels.com/photos/209644/pexels-photo-209644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="images"
                    src="https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="images"
                    src="https://images.pexels.com/photos/2827755/pexels-photo-2827755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="images"
                    src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="images"
                    src="https://images.pexels.com/photos/2301226/pexels-photo-2301226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarSlides;