import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import TopNav from '../top-nav';
import SocialNav from '../social-nav';

class Projects extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
               <TopNav />
                {this.props.state.projects.map((project)=> {
                    return (
                        <div id="featured-section" className="clearfix">
                            <div className="featured-project-image">
                                <a href={project.url}><img src={project.image} /></a>
                            </div>
                            <div className="featured-project-text">
                                <h3><a href={project.url}>{project.name}</a></h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    )
                })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects)