import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import './styles/contact.css'

const Contact = () => (
    <div id="contact">
        <div className="contact-page">
            <h1 className="contact-title">Get In Touch</h1>
            <div className="contact-content">
                <p className="contact-message">I am actively seeking new opportunities! My inbox is always open, whether you'd like to get to know more about myself or one of my projects, or if you just have a question, please do not hesitate to reach out!</p>
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

export default Contact;

