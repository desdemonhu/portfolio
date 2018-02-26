import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import TopNav from '../top-nav';
import SocialNav from '../social-nav';
import Modal from '../modal';

class Gallery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalOpen: false,
            key: 0
        }
    }

    openModal = (event) => {
        this.setState({modalOpen: true, key: parseInt(event.target.id)})
        console.log(event.target);   
    }

    closeModal = () => {
        this.setState({modalOpen: false, key: 0});
    }

    render(){
        return (
            <div>
                <TopNav />
                <div id="gallery">
                    {this.props.state.pictures.map((picture, index)=> {
                        return (
                            <img src={require(`${picture.thumbnail}`)} className="gallery-picture thumbnail" id={index} key={index} onClick={this.openModal}/>
                        )
                    })}
                    </div>
                    {this.state.modalOpen
                        && <Modal gallery={this.props.state.pictures} index={this.state.key} closeModal={this.closeModal}/>
                    }
                <SocialNav />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {state};
}

const mapDispatchToProps = (dispatch, getState) =>({

    }) 

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);