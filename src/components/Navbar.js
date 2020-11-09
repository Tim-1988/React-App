import React from 'react'
import shoppingcart from './shoppingcart.svg';
import Logo from './Logo.svg';
import './Navbar.css';


export default function Navbar() {
    return (
        <div>
            <nav className = "navbar">
                <div>
                   <ul className = "nav-links">
                       <li className = "Logo"><img src = {Logo}></img></li>
                       <li className = "Products">PRODUCTS
                                <ul className = "Dropdown">
                                    <li className = "APPLE">APPLE</li>
                                    <li className = "SAMSUNG">SAMSUNG</li>
                                    <li className = "XIAOMI">XIAOMI</li>
                                    <li className = "LAPTOPS">LAPTOPS</li>
                                    <li className = "TV-AUDIO">TV-AUDIO</li>
                                    <li className = "ACCESORIES">ACCESORIES</li>
                                </ul>
                       </li>
                       <li className = "Phone">CALL US: 777-77-77</li>
                       <li className = "Search"><input type = "search" placeholder = "Search Product"></input><button>Search</button></li>
                       <li className = "Cart"><img src = {shoppingcart}></img><span>0</span></li>
                    </ul>    
                </div>  
            </nav> 
        </div>
    )
}
