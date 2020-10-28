import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './styles/portfolio.css'
import mazemonkey from './images/mazemonkey.png'
import mazemonkeygif from './images/mazemonkey.gif'
import nutrition from './images/demolitionnutrition.png'
import nutritiongif from './images/demolitionnutrition.gif'
import casino from './images/casino.png'
import casinogif from './images/casino.gif'
import millionaire from './images/millionaire.png'
import millionairegif from './images/millionaire.gif'
import DemoModal from './DemoModal.js'

class Portfolio extends React.Component {

    render() {
        return (
            <div id="portfolio">
                <h1>Portfolio</h1>
                <AwesomeSlider animation="cubeAnimation">
                    <div className="demolition-nutrition">
                        <h1>Demolition Nutrition</h1>
                        <img src={nutrition} alt="demolition nutrition" width="750px" height="400px" />
                        <p>HTML | CSS | JS | React | Bootstrap | Nutritionix API | Geocoding API | Ruby on Rails | PostgreSQL</p>
                        <DemoModal gif={nutritiongif} />
                        <AwesomeButton
                            size='medium'
                            target='_blank'
                            href='https://github.com/colin-mosley/Demolition-Nutrition-Frontend'
                        >
                            Source Code
                        </AwesomeButton>
                        <AwesomeButton
                            size='medium'
                            target='_blank'
                            href='https://youtu.be/FS6Hd9pQQ_o'
                        >
                            Full Video
                        </AwesomeButton>
                    </div>
                    <div className="mosbros-casino">
                        <h1>Mos Bros Casino</h1>
                        <img src={casino} alt="mos bros casino" width="750px" height="400px" />
                        <p>HTML | CSS | JS | React | Ruby on Rails | PostgreSQL</p>
                        <DemoModal gif={casinogif} />
                        <AwesomeButton
                            size='medium'
                            target='_blank'
                            href='https://github.com/colin-mosley/mosbros-casino-frontend'
                        >
                            Source Code
                        </AwesomeButton>
                        <AwesomeButton
                            size='medium'
                            target='_blank'
                            href='https://youtu.be/YQ_sav1GPwc'
                        >
                            Full Video
                        </AwesomeButton>
                    </div>
                    <div className="maze-monkey">
                        <h1>Maze Monkey</h1>
                        <img src={mazemonkey} alt="Maze Monkey" width="750px" height="400px" />
                        <p>HTML | CSS | JS | Ruby on Rails | PostgreSQL</p>
                        <DemoModal gif={mazemonkeygif} />
                        <AwesomeButton
                            size='medium'
                            target='_blank'
                            href='https://github.com/colin-mosley/Maze-Monkey'
                        >
                            Source Code
                        </AwesomeButton>
                        <AwesomeButton
                            size='medium'
                            target='_blank'
                            href='https://youtu.be/3__Ykxcmi9s'
                        >
                            Full Video
                        </AwesomeButton>
                    </div>
                    <div className="millionaire">
                        <h1>Millionaire</h1>
                        <img src={millionaire} alt="Millionaire" width="750px" height="400px" />
                        <p>Ruby | ActiveRecord | SQLite3 | TTY-Prompt | Colorize | Open Trivia DB API </p>
                        <DemoModal gif={millionairegif} />
                        <AwesomeButton
                            size='medium'
                            target='_blank'
                            href='https://github.com/colin-mosley/Millionaire'
                        >
                            Source Code
                        </AwesomeButton>
                        <AwesomeButton
                            size='medium'
                            target='_blank'
                            href='https://youtu.be/u5_N6z61UIg'
                        >
                            Full Video
                        </AwesomeButton>
                    </div>
                </AwesomeSlider>
            </div>
        )
    }
}

export default Portfolio;