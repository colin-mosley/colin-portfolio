import React from 'react';
import { AwesomeButton } from 'react-awesome-button';

const Home = () => (
    <div className="home">
        <div className="introduction">
            Hello, I'm{' '}
            <span className="title-name">Colin Mosley</span>
            <br/>
            <h2>I'm a Software Engineer.</h2>
        </div>
        <div className="home-button">
            <AwesomeButton
                className="contact-button"
                size='large'
                href='#about'
            >
                More About Me
            </AwesomeButton>
        </div>
    </div>
)

export default Home;

