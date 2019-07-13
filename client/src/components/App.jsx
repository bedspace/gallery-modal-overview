import React, {Component} from 'react';
import Buttons from './Buttons.jsx';
import FullScreenModal from './FullScreenModal.jsx';
import ShareModal from './ShareModal.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
            images: [],
            shareModalActive: false,
            shareLinks: ['FaceBook', 'Twitter', 'Pinterest', 'Messenger', 'WhatsApp']
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }


    showModal(modalType) {
        console.log('MODAL STATE CHANGED');
        //make it so both modals use the same handler using [nameHere]: true
        this.setState({
            [modalType]: true
        })
    }

    hideModal(event) {
        console.log('MODAL STATE CLOSED');
        //redundant logic
        this.setState({
            modalActive: false,
            shareModalActive: false
        })
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
                <FullScreenModal hideModal={this.hideModal} images={images} modalActive={this.state.modalActive}/>
                {/* Mini modal goes here */}
                <ShareModal hideModal={this.hideModal} shareLinks={this.state.shareLinks} show={this.state.shareModalActive} showModal={this.showModal}/>
                </div>
            )}
            </div>
        )
    }
}

export default App;