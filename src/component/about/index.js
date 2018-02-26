import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import TopNav from '../top-nav';
import SocialNav from '../social-nav';

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div>
                <TopNav />
                <div id="about-me">
                    <h1>About Me </h1>
                    <p>
                        I am passionate about programming. From full stack web development, to making games in GameMaker Studio and Unity, I love the challenges an interesting new project provides. I work well both independently and with a diverse team, and I’ve worked on projects built from scratch, and ones using an existing code base.
                    </p>
                    <p>
                        I enjoy the fact that you must continually evolve in software development. Whether it be exploring the nooks and crannies of a familiar language, or learning a new one, I strive to write clean, well-documented code.
                    </p>
                </div>
                <SocialNav />
            </div>
        )
    }
}

export default About;