import React, {Component} from 'react';
import Buttons from './Buttons.jsx';
import FullScreenModal from './FullScreenModal.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }


    showModal() {
        console.log('MODAL STATE CHANGED');
        this.setState({
            modalActive: true
        })
    }

    hideModal(event) {
        console.log('MODAL STATE CLOSED');
        if (event.keyCode === 27) {
            this.setState({
                modalActive: false
            })
        }
    }

    componentDidMount() {

        //for handling escape key exit on modal
        window.addEventListener('keyup', this.hideModal, false);

        fetch('http://localhost:1128/testing')
        .then(function(response) {
          console.log('BEFORE RESPONSE GETS JSOND');
          return response.json();
        })
        .then(function(myJson) {
          console.log('WE GOT SOME DATA BACK');
          console.log(Array.isArray(myJson));
        })
    }

    render() {
        return (
            <div className='parentDiv'>
                <div>
                    <div className="galleryContainer">
                        <div className="leftChild">
                            <img src="https://bit.ly/2S8xQ6H"/>
                        </div>
                        <div className="rightChild">
                            <div className="rightInnerChildTop">
                                <img className="smallImageTop" src="https://bit.ly/2G8adqa"/>
                            </div>
                            <div className="rightInnerChildBottom">
                                <img className="smallImageBottom" src="https://bit.ly/2G4EshE"/>
                            </div>
                        </div>
                    </div>
                    <Buttons hideModal={this.hideModal} showModal={this.showModal}/>
                </div>
            <FullScreenModal modalActive={this.state.modalActive}/>
            </div>
        )
    }
}

export default App;