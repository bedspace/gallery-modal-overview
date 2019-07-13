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
            imageIndex: 0,
            translateX: 0
        }

        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    nextImage() {
        if (this.state.imageIndex === this.props.images.length - 1) {
            return;
        }
        let translateX = this.state.translateX;
        translateX = translateX - 54;
        this.setState({
            imageIndex: this.state.imageIndex + 1,
            translateX: translateX
        });
    }

    previousImage() {
        if (this.state.imageIndex === 0) return;

        let translateX = this.state.translateX;
        translateX = translateX + 54;

        this.setState({
            imageIndex: this.state.imageIndex - 1,
            translateX: translateX
        });
    }

// height: 24px; width: 24px; display: block; fill: rgb(72, 72, 72);

    render() {
        const { modalActive } = this.props;
        const { images } = this.props;
        const { imageIndex } = this.state;
        const { hideModal } = this.props;
        const exitButtonStyle = {
            height: '24px',
            width: '24px',
            display: 'block',
            fill: 'rgb(72,72,72)'
        }
        const showOrHide = modalActive ? "modal display-block" : "display-none";
        return (
            <React.Fragment>
                <div className={showOrHide}>
                    <div style={{display: 'flex'}}>
                        <div className="exitButton">
                            <button onClick={hideModal} style={{background:'none', borderStyle:'none', position: 'absolute', right: '0px', padding: '32px'}}>
                            <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={exitButtonStyle}>
                                <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path>
                            </svg>
                            </button>
                        </div>
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
                        <SidePanel imageIndex={imageIndex} translateX={this.state.translateX} images={images}/>
                        {/* <div id="paragraph">{images[imageIndex].desc}</div> */}
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FullScreenModal;