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
            <div id="top-nav">
                <ul>
                    <li className="menu-icon"><a href="/"><FontAwesomeIcon icon="home"  /></a></li>
                    <li className="menu-icon"><a href="/about"><FontAwesomeIcon icon="child"  /></a></li>
                    <li className="menu-icon"><a href="/projects"><FontAwesomeIcon icon="star"  /></a></li>
                    <li className="menu-icon"><a href="/gallery"><FontAwesomeIcon icon="paint-brush"  /></a></li>
                </ul>
            </div>
        )
    }
}

export default TopNav