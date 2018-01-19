import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from '../top-nav'
import SocialNav from '../social-nav'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faalignjustify } from '@fortawesome/fontawesome-free-solid'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            togglenav: false
        }
    }

    hamburgerMenu = () => {
        if(this.state.togglenav === false){
            this.setState({ togglenav: true })
        } else {
            this.setState({togglenav: false})
        }
    }

    render() {
        return (
            <div>
                <FontAwesomeIcon icon="align-justify" id="hamburger-menu" onClick={this.hamburgerMenu}/>
                {this.state.togglenav &&
                <TopNav />
                }
                <img src="/src/assets/the_writer_banner.png" />
                <p id="intro-text">
                Raegan Millhollin<br />
                Game & Web Developer
                </p>
                <SocialNav />
            </div>
        )
    }
}

export default Home