import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectIndex: 0
        }
    }

    advanceThroughProjects = () => {
        let newIndex = this.state.projectIndex + 1;
        if(this.state.projectIndex < this.props.projects.length -1) {
            this.setState({projectIndex: newIndex})
        }else {
            this.setState({projectIndex: 0})
            }
        }

    render() {
        return (
            <div id="featured-section" className="clearfix">
            <div className="featured-project-image">
                <img src={this.props.projects[this.state.projectIndex].image} />
            </div>
                <div className="featured-project-text">
                    <h3><a href={this.props.projects[this.state.projectIndex].url}>{this.props.projects[this.state.projectIndex].name}</a></h3>
                    <p>{this.props.projects[this.state.projectIndex].description}</p> 
                </div> 
                <div className="featured-project-button">
                    <button onClick={this.advanceThroughProjects}> > </button>
                </div>
            </div>
        )
    }
}

export default Home
