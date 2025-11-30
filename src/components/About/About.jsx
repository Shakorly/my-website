import React from 'react'
import './About.css'


const About = () => {
    return(
        <div className="About">
            <div className="about-title">
                <h1>
                    About me
                </h1>
            </div>
            <div className="about-content">
                <p> I am am experienced Full Stack Software Developer with over 3 years in the field</p>
                <hr/>
                <p>Throughout my carrer, I have had the privilege of collaborating with many organisations</p>
                <hr/>
                <p>My passion for sotfwaare development is not only reflected in my extensive experiece but also in the enthuisan and dediation i bring to each project </p>
            </div>
            <div className="about-section">
                <div className="line">
                    <p>HTML & CSS </p>
                    <hr style={{width:'10%'}} />
                </div>
                
                <div className="line">
                    <p>Node JS</p>
                    <hr style={{width:'80%'}} />
                </div>

                <div className="line">
                    <p>ETL Developer </p>
                    <hr style={{width:'50%'}} />
                </div>

                <div className="line">
                    <p>Database Developer </p>
                    <hr style={{width:'50%'}} />
                </div>
                

            </div>
        </div>
    )
}

export default About