import React from 'react';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import {
    faMedium,
    faLinkedin,
    faInstagram,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow(){

    return(
        <div className = "socialContainer">
            <a href='https://www.linkedin.com/in/devin-arnold-a7539a52/'
                className="social" >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>

            <a href='http://github.com/darnold001/'
                className="social" >
            <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>

            <a href='https://www.instagram.com/iamdarnld/'
                className="social" >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>

            <a href='https://medium.com/@dbarnold321/'
                className="social" >
            <FontAwesomeIcon icon={faMedium} size="3x" />
            </a>
        </div>
    )
}