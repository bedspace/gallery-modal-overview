import React, {Component} from 'react';
import ShareLinks from './ShareLinksSVG.jsx';
import styles from '../cssModules/style.css';

console.log(ShareLinks);
let ShareLinksModal = (props) => {
    const svgIconStyle = {
        height: '18px',
        width: '18px',
        display: 'block',
        fill: 'rgb(72,72,72)'
    }
    return (
        <React.Fragment>
            {ShareLinks.map((link, index) => {
                return (
                    <div key={link.text} className={styles.shareTo}>
                        <div className={styles.shareToChild}>
                            <div>
                                <span>
                                    <button>
                                        <div style={{display: 'flex'}}>
                                            <div className={styles.shareToIcon}>
                                                <div>
                                                    {link.svg}
                                                </div>
                                            </div>
                                            <div className={styles.shareToText}>
                                                <div>{link.text}</div>
                                            </div>
                                        </div>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default ShareLinksModal;