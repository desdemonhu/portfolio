import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import TopNav from '../top-nav';
import SocialNav from '../social-nav';
import Featured from '../featured';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faalignjustify } from '@fortawesome/fontawesome-free-solid';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="app">
                <TopNav />
                <div id="home-border">
                    <p id="intro-text">
                        Raegan Millhollin - Game & Web Developer
                    </p>
                    <img src={`${__dirname}assets/the_writer_banner.png`} id="banner"/>
                </div>
                <Featured projects={this.props.state.projects}/>
                <SocialNav />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch, getState) => ({
        
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)