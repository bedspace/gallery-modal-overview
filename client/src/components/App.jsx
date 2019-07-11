import React, {Component} from 'react';
import Buttons from './Buttons.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false
        }

        this.activateModal = this.activateModal.bind(this);
    }


    activateModal() {
        console.log('MODAL STATE CHANGED');
        this.setState({
            modalActive: true
        })
    }

    componentDidMount() {
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
                    <Buttons activateModal={this.activateModal}/>
                </div>
            </div>
        )
    }
}


export default App;