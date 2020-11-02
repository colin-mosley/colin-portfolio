import React, { useEffect } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import './styles/contact.css'
import Aos from 'aos';

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div id="contact">
            <div className="contact-page">
                <h1 data-aos='fade-right' className="contact-title">Get In Touch</h1>
                <div data-aos='fade-up' className="contact-content">
                    <p data-aos='fade-left' className="contact-message">I am actively seeking new opportunities! My inbox is always open, whether you'd like to get to know more about myself or one of my projects, or if you just have a question, please do not hesitate to reach out!</p>
                    <AwesomeButton
                        
                        className="contact-button"
                        size='large'
                        target='_blank'
                        href='mailto:colin.a.mosley@gmail.com'
                    >
                        Contact Me!
                </AwesomeButton>
                </div>
            </div>
        </div>
    )
}

export default Contact;

