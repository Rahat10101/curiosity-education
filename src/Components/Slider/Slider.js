import React from 'react';
import one from '../../Assets/Slider/one.jpg';
import two from '../../Assets/Slider/two.jpg';
import three from '../../Assets/Slider/three.jpg';
import './Slider.css';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src={one}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Johnny Depp</h3>
                    <p>"It's really fun to learn with you guys. "</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src={two}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Will Smith</h3>
                    <p>"When you have a dream, you’ve got to grab it and never let go."</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-image"
                    src={three}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Leonardo DiCaprio</h3>
                    <p>"Nothing is impossible. The word itself says Im possible !"</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;