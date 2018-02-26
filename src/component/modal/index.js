import React from 'react'
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: this.props.index
        }
    }

    goForwards = () => {
        if(this.state.currentIndex < this.props.gallery.length -1) {
            this.setState({ currentIndex: this.state.currentIndex+1 })
        } else {
            this.setState({currentIndex: 0})
        }
        
    }

    goBackwards = () => {
        if(this.state.currentIndex > 0){
            this.setState({ currentIndex: this.state.currentIndex-1 })
        } else {
            this.setState({ currentIndex: this.props.gallery.length-1 })
        }
    }


    render(){
        return(
            <div className="modal">
            <button className="close" onClick={this.props.closeModal}>X</button>
                <div className="modal-content">
                    <button className="modal-button prev" onClick={this.goBackwards}>&lt;</button>
                    <img src={require(this.props.gallery[this.state.currentIndex].image)} onClick={this.goForwards} />
                    <button className="modal-button next" onClick={this.goForwards}>&gt;</button>
                </div>
            </div>
        )
    }


}

export default Modal;