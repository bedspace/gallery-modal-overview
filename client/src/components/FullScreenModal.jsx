import React, {Component} from 'react';

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

        }
    }


    render() {
        const {modalActive} = this.props;
        const showOrHide = modalActive ? "modal display-block" : "display-none";
        return (
            <React.Fragment>
                <div className={showOrHide}>
                    <div style={{display: 'flex'}}>
                        <div id="carousel">
                            <div className="carouselArrows">
                                <button className="leftArrow">
                                    {/* <img src="https://bit.ly/2Y3gUUo"/> */}
                                    <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={styleValues}>
                                        <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd">
                                    </path>
                                    </svg>
                                </button>
                                <button className="rightArrow">
                                    <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={styleValues}>
                                        <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path>
                                    </svg>
                                    {/* <img src="https://bit.ly/2Lj65ri"/> */}
                                </button>
                            </div>
                            <span>
                                <div>
                                    <img className="carouselImg" src="https://bit.ly/2S8xQ6H"/>
                                </div>
                            </span>
                        </div>
                        <div id="sidePanel"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FullScreenModal;