import React, {Component} from 'react';
import Buttons from './Buttons.jsx';
import FullScreenModal from './FullScreenModal.jsx';
import ShareModal from './ShareModal.jsx';
import SaveModal from './SaveModal.jsx';
import styles from '../cssModules/style.css';

//IMPORT styles from './cssModules/example.css' then pass styles.galleryContainer into wherever it belongs etc

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
            images: [],
            shareModalActive: false,
            saveModalActive: false
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }


    showModal(modalType) {
        this.setState({
            [modalType]: true
        })
    }

    hideModal(event) {
        this.setState({
            modalActive: false,
            shareModalActive: false,
            saveModalActive: false
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
        console.log('styles below');
        console.dir(styles);
        const { images } = this.state;
        return (
            <div className={styles.parentDiv}>
                {images.length > 0 && (
                <div>
                    <div className={styles.galleryContainer}>
                        <div className={styles.leftChild}>
                            <img src={images[0].image_url}/>
                        </div>
                        <div className={styles.rightChild}>
                            <div className={styles.rightInnerChildTop}>
                                <img className={styles.smallImageTop} src={images[1].image_url}/>
                            </div>
                            <div className={styles.rightInnerChildBottom}>
                                <img className={styles.smallImageBottom} src={images[2].image_url}/>
                            </div>
                        </div>
                    </div>
                    <Buttons hideModal={this.hideModal} showModal={this.showModal}/>
                <FullScreenModal hideModal={this.hideModal} images={images} modalActive={this.state.modalActive}/>
                <ShareModal hideModal={this.hideModal}  show={this.state.shareModalActive} showModal={this.showModal}/>
                <SaveModal hideModal={this.hideModal} show={this.state.saveModalActive}/>
                </div>
            )}
            </div>
        )
    }
}

export default App;