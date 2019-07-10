import React, {Component} from 'react';

const Buttons = () => {
    return (
        <React.Fragment>
            <div className="viewPhotosContainer">
                <button className="viewPhotosButton">
                    <span>View Photos</span>
                </button>
            </div>
            <div className="shareSaveContainer">
                <div>
                    <div className="topButtons">
                        <button className="viewPhotosButton">
                            <span>
                                <div style={{'justifyContent': 'center'}}>
                                    <div id="shareIcon">
                                        <div style={{marginRight: '17px'}}>
                                            {/* <ShareSVG/> */}
                                            <img src="https://i.ibb.co/71Ws2XW/AIRBNB-SHARE-ICON.png"/>
                                            {/* <svg></svg> */}
                                            {/* PUT SVG MARKUP COMPONENT HEREE */}
                                        </div>
                                    </div>
                                    <div id="shareText">
                                        <div>Share</div>
                                    </div>
                                </div>
                            </span>
                        </button>
                    </div>
                    <div className="topButtons" style={{marginLeft: '18px'}}>
                        <button className="viewPhotosButton">
                            <span>
                                <div style={{'justifyContent': 'center', 'display': 'flex'}}>
                                    <div style={{marginRight: '12px'}}>
                                        <div></div>
                                        <img id="heartIcon" src="https://bit.ly/30sMiZY"/>
                                    </div>
                                    <div>Save</div>
                                </div>
                            </span>
                        </button>
                    </div>
                </div>
            </div>        
        </React.Fragment>
    )
}

export default Buttons;