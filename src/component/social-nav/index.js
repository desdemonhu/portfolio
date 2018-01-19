import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faalignjustify, fagithub } from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

class SocialNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href="https://github.com/desdemonhu" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} className="menu-icon" /></a></li>
                    <li><a href="https://www.linkedin.com/in/raegan-millhollin" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} className="menu-icon" /></a></li>
                </ul>
            </div>
        )
    }
}

export default SocialNav