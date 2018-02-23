import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Title: {this.props.projects[0].name}</h3>
                <p>Description: 
                </p>
            </div>
        )
    }
}

export default Home
