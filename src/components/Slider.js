import React from 'react'
import './Slider.css';
import slider1 from './sliderimg/slider1.jpg'
import slider2 from './sliderimg/slider2.jpg'
import slider3 from './sliderimg/slider3.jpg'
import slider4 from './sliderimg/slider4.jpg'
import slider5 from './sliderimg/slider5.jpg'
import slider6 from './sliderimg/slider6.jpg'
import slider7 from './sliderimg/slider7.jpg'
import slider8 from './sliderimg/slider8.jpg'
import slider9 from './sliderimg/slider9.jpg'


function Slider() {
return (
    <div className = "Slideshow">
        <div className = "Screen">
            <ul className = "Slides">
                <li><img src = {slider1} alt = "1"></img></li>
                <li><img src = {slider2} alt = "2"></img></li>
                <li><img src = {slider3} alt = "3"></img></li>
                <li><img src = {slider4} alt = "4"></img></li>
                <li><img src = {slider5} alt = "5"></img></li>
                <li><img src = {slider6} alt = "6"></img></li>
                <li><img src = {slider7} alt = "7"></img></li>
                <li><img src = {slider8} alt = "8"></img></li>
                <li><img src = {slider9} alt = "9"></img></li>
                <ul className = "dots">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </ul>


            <button className = "trigger t-left"> &#10094; </button>
            <button className = "trigger t-right"> &#10095; </button>
        </div>
    </div>
    )
}

export default Slider