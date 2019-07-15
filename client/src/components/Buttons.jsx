import React, {Component} from 'react';
import styles from '../cssModules/style.css';

const Buttons = (props) => {
    return (
        <React.Fragment>
            <div className={styles.viewPhotosContainer}>
                {/* just as a note. Before refactoring with CSS modules. The button below had 2 classes, viewPhotosButton and viewPhoto. 
                I didn't use viewphoto however. So if theres an error later on, come back to this. */}
                <button onClick={ () => {props.showModal('modalActive')}} className={styles.viewPhotosButton}>
                    <span>View Photos</span>
                </button>
            </div>
            <div className={styles.shareSaveContainer}>
                <div>
                    <div className={styles.topButtons}>
                        <button  onClick={() => {props.showModal('shareModalActive')}} className={styles.viewPhotosButton}>
                            <span>
                                <div style={{'justifyContent': 'center'}}>
                                    <div id={styles.shareIcon}>
                                        <div style={{marginRight: '17px'}}>
                                            {/* <ShareSVG/> */}
                                            <img src="https://i.ibb.co/71Ws2XW/AIRBNB-SHARE-ICON.png"/>
                                            {/* <svg></svg> */}
                                            {/* PUT SVG MARKUP COMPONENT HEREE */}
                                        </div>
                                    </div>
                                    <div id={styles.shareText}>
                                        <div>Share</div>
                                    </div>
                                </div>
                            </span>
                        </button>
                    </div>
                    <div className={styles.topButtons} style={{marginLeft: '18px'}}>
                        <button onClick={() => {props.showModal('saveModalActive')}} className={styles.viewPhotosButton}>
                            <span>
                                <div style={{'justifyContent': 'center', 'display': 'flex'}}>
                                    <div style={{marginRight: '12px'}}>
                                        <div></div>
                                        <img id={styles.heartIcon} src="https://bit.ly/30sMiZY"/>
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