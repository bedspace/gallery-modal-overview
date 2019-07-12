import React, {Component} from 'react';
import Buttons from './Buttons.jsx';
import FullScreenModal from './FullScreenModal.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
            images: []
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
        let self = this;
        //for handling escape key exit on modal
        window.addEventListener('keyup', this.hideModal, false);

        fetch('http://localhost:1128/images')
        .then(function(response) {
          console.log('BEFORE RESPONSE GETS JSOND');
          return response.json();
        })
        .then(function(myJson) {
          console.log('WE GOT SOME DATA BACK');
          console.log(Array.isArray(myJson));
          console.log(myJson);
          self.setState({
              images: myJson
          });
        })
    }

    render() {
        const { images } = this.state;
        return (
            <div className='parentDiv'>
                {images.length > 0 && (
                <div>
                    <div className="galleryContainer">
                        <div className="leftChild">
                            <img src={images[0].image_url}/>
                        </div>
                        <div className="rightChild">
                            <div className="rightInnerChildTop">
                                <img className="smallImageTop" src={images[1].image_url}/>
                            </div>
                            <div className="rightInnerChildBottom">
                                <img className="smallImageBottom" src={images[2].image_url}/>
                            </div>
                        </div>
                    </div>
                    <Buttons hideModal={this.hideModal} showModal={this.showModal}/>
                <FullScreenModal images={images} modalActive={this.state.modalActive}/>
                </div>
            )}
            </div>
        )
    }
}

export default App;