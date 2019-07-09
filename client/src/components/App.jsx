import React, {Component} from 'react';
import Buttons from './Buttons.jsx';

const AppStyle = {
    width: '100%',
    height: '500px',
    'background-color': 'blue',
    position: 'relative'
}

const housePicture = {
    width: '50%',
    height: '50%'
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                            <img src="https://bit.ly/2Xun9Bc"/>
                        </div>
                        <div className="rightChild">
                            <div className="rightInnerChild">
                                <img className="smallImage" src="https://bit.ly/2XMKgXd"/>
                            </div>
                            <div className="rightInnerChild">
                                <img className="smallImage" src="https://bit.ly/32eDPLP"/>
                            </div>
                        </div>
                    </div>
                    <div className="viewPhotosContainer">
                        <button className="viewPhotosButton">
                            <span>View Photos</span>
                        </button>
                    </div>
                    <div className="shareSaveContainer">
                        <div>
                            <div className="shareButton">

                            </div>
                            <div className="saveButton">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;