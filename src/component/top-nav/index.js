import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faalignjustify, faHome, faChild, faPaintBrush, faStar } from '@fortawesome/fontawesome-free-solid'

class TopNav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <ul>
                    <li><a href="/"><FontAwesomeIcon icon="home" className="menu-icon" /></a></li>
                    <li><a href="/about"><FontAwesomeIcon icon="child" className="menu-icon" /></a></li>
                    <li><a href="/projects"><FontAwesomeIcon icon="star" className="menu-icon" /></a></li>
                    <li><a href="/gallery"><FontAwesomeIcon icon="paint-brush" className="menu-icon" /></a></li>
                </ul>
            </div>
        )
    }
}

export default TopNav