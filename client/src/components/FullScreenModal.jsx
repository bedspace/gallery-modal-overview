import React, {Component} from 'react';
import SidePanel from './SidePanel.jsx';

const styleValues={
    height: '24px',
    width: '24px',
    fill: 'rgb(72,72,72)'
}
// height: 24px; width: 24px; fill: rgb(72, 72, 72);"
class FullScreenModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageIndex: 0
        }

        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    nextImage() {
        this.setState({
            imageIndex: this.state.imageIndex + 1
        });
    }

    previousImage() {
        if (this.state.imageIndex === 0) return;

        this.setState({
            imageIndex: this.state.imageIndex - 1
        });
    }


    render() {
        const { modalActive } = this.props;
        const { images } = this.props;
        const { imageIndex } = this.state;
        console.log('THESE IMAGES ARE FROM FULLSCREENMODAL.JSX');
        console.log(images);
        const showOrHide = modalActive ? "modal display-block" : "display-none";
        return (
            <React.Fragment>
                <div className={showOrHide}>
                    <div style={{display: 'flex'}}>
                        <div id="carousel">
                            <div className="carouselArrows">
                                <button onClick={this.previousImage} className="leftArrow">
                                    <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={styleValues}>
                                        <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd">
                                    </path>
                                    </svg>
                                </button>
                                <button  onClick={this.nextImage} className="rightArrow">
                                    <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={styleValues}>
                                        <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <span>
                                <div>
                                    <img className="carouselImg" src={images[imageIndex].image_url}/>
                                </div>
                            </span>
                        </div>
                        <SidePanel images={images}/>
                        {/* <div id="sidePanel"></div> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FullScreenModal;