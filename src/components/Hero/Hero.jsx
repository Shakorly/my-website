import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile-pic.png'

const Hero = () => {
    return(
        <div className='hero'>
            <img src={profile_pic} alt='profile_picture'/>
            <h1><span>I'am Taiwo Shakiru, </span>Full Stack Software Developer base in Nigeria</h1>
            <p>with 2 years of experiance</p>

            <div className='hero-action'>
                <div className="hero-connect">
                    <a href="https://www.linkedin.com/in/taiwo-shakiru-4aa921212">Connect with me</a>
                </div>

                <div className="resume">
                   <a href="https://github.com/Shakorly">My Resume</a> 
                </div>
            </div>

        </div>
    )
}

export default Hero

