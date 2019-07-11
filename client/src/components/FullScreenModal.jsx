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
                            <div className="carouselArrows"></div>
                        </div>
                        <div id="sidePanel"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FullScreenModal;