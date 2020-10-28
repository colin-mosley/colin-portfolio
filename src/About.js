import React from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';
import defaultStyles from 'react-awesome-button/src/styles';
import './styles/about.css'
import picture from './images/colin.jpeg'

const About = () => (
  <div id="about">
    <div id="about-page" className="about-page">
        <div className="about-section-title">
            <h1 className='about-title'>About</h1>
            <p>my name is colin and i'm an engineer</p>
        </div>
        <img id="image" src={picture} alt="My Picture"/>
        <div className="about-information">
            <h3 className="about-information-title">Software Engineer & Web Developer</h3>
            <p>
                Native Texan, engineer and fitness enthusiast that embraces mental and physical challenges.
            </p>
        </div>
        <div>
            Degree: BS in Petroleum Engineering
        </div>
        <div>
            Phone: 469-442-7040
        </div>
        <div>
            Email:
        </div>
        <div>
            City: Austin, Texas
        </div>
        <p className="description">
            Self-driven engineer with 3+ years of experience working in a fast-paced environment, executing company aligned goals through communication, collaboration, and critical thinking. Previously specializing in oil & gas field operations, I am looking to transition into the technology industry and pursue my passion for solving problems by joining a company that prioritizes client support, critical thinking, and communication to achieve technology goals.
        </p>
        <div className="contact-information">
            <AwesomeButtonSocial
                size="large"
                type='instagram'
                target='_blank'
                href='https://www.instagram.com/colin_mosley'
                
            >
                {'Instagram'}
            </AwesomeButtonSocial>
            <AwesomeButtonSocial
                size='large'
                type='linkedin'
                target='_blank'
                href='https://www.linkedin.com/in/colin-mosley'
                >
                LinkedIn
            </AwesomeButtonSocial>
            <AwesomeButtonSocial
                size='large'
                type='github'
                target='_blank'
                href='https://github.com/colin-mosley'
                >
                GitHub
            </AwesomeButtonSocial>
        </div>
      
    </div>
  </div>
)

export default About;