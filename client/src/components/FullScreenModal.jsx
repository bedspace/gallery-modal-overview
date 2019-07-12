import React, {Component} from 'react';


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
                                    <img src="https://bit.ly/2Y3gUUo"/>
                                </button>
                                <button className="rightArrow">
                                    <img src="https://bit.ly/2Lj65ri"/>
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