import { findByLabelText } from '@testing-library/react';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slider1 from './sliderimg/slider1.jpg'
import slider2 from './sliderimg/slider2.jpg'
import slider3 from './sliderimg/slider3.jpg'
import slider4 from './sliderimg/slider4.jpg'
import slider5 from './sliderimg/slider5.jpg'
import slider6 from './sliderimg/slider6.jpg'
import slider7 from './sliderimg/slider7.jpg'
import slider8 from './sliderimg/slider8.jpg'
import slider9 from './sliderimg/slider9.jpg'

function SliderBS() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src={slider1} alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider2} alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider3} alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider4} alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider5} alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider6} alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider7} alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider8} alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider9} alt=""/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default SliderBS;