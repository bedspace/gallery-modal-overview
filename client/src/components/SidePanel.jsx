import React, {Component} from 'react';
import styles from '../cssModules/style.css';

const SidePanel = (props) => {
    let { translateX } = props;
    let translatexValue = {
        transform: `translateX(${translateX}px)`
     };
     let desc = [];
     for (var i = 0; i < props.images.length; i++) {
         desc.push(props.images[i].desc);
     }

     console.log('below is desc');
     console.log(desc);
    return (
        <div id={styles.sidePanel}>
            <div className={styles.pictureReel}>
                <div className={styles.innerPictureReel}>
                    <div className={styles.secondInnerPictureReel}>
                        <div className={styles.thirdInnerPictureReel}>
                            <div></div>
                            <div className={styles.theGradient}></div>
                            <div className={styles.theLeftGradient}></div>
                            <div className={styles.fourthInnerPictureReel}>
                                <div className={styles.actualPictureReel}>
                                    <ul style={translatexValue} className={styles.pictureList}>
                                        {props.images.map((image, index) => (
                                            <li key={image.id} className={styles.pictureItem}>
                                                <button className={styles.itemButton}>
                                                    <img  src={image.image_url} className={styles.pictureImage}/>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.paragraph}><span>{desc[props.imageIndex]}</span></div>
        </div>
    )
}

export default SidePanel;