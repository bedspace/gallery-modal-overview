import React, {Component} from 'react';

const SidePanel = (props) => {
    return (
        <div id="sidePanel">
            <div className="pictureReel">
                <div className="innerPictureReel">
                    <div className="secondInnerPictureReel">
                        <div className="thirdInnerPictureReel">
                            <div></div>
                            <div className="theGradient"></div>
                            <div className="fourthInnerPictureReel">
                                <div className="actualPictureReel">
                                    <ul className="pictureList">
                                        {props.images.map((image, index) => (
                                            <li key={image.id} className="pictureItem">
                                                <button className="itemButton">
                                                    <img  src={image.image_url} className="pictureImage"/>
                                                </button>
                                            </li>
                                        ))};
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidePanel;