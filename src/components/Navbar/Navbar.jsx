import React from 'react'
import logo from "../../assets/mainLogo.png"
import "./Navbar.css"



function Navbar(){
    return(
        <div className='navbar'>
            <img src={logo} alt='site logo' />

            <ul className='nav-menu'>
                <li className='home'>Home</li>
                <li className='about'>About</li>
                <li className='service'>Services</li>
                <li className='portfolio'>Portfolio</li>
                <li className='contact'>Contact</li>
            </ul>

            <div className='nav-connect'>
                Connect with me 
            </div>

        </div>
    )
}

export default Navbar