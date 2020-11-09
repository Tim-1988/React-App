import React from 'react'
import './BottomMenu.css';
import image from './map1.jpg'


export default function BottomMenu() {
    return (
        <div className = "BottomMenu">
            <div className = "Delivery"><p className = "p1">Delivery & Payment</p></div>
            <div className = "About"><p className = "p2">About us</p></div>
            <div className = "Repair"><p className = "p3">Repair & Guarantee</p></div>
            <div className = "VK"><p className = "p4">VK</p></div>
            <div className = "Insta"><p className = "p5">Insta</p></div>
            <div className = "FB"><p className = "p6">FB</p></div>
            <div className = "Location"><p className = "p7">Our Location:</p></div>
            <div className = "Map"></div>
        </div>
    )
}
