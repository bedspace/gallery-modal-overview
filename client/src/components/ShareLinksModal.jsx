import React, {Component} from 'react';
import ShareLinks from './ShareLinksSVG.jsx';

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
                    <div key={link.text} className="shareTo">
                        <div className="shareToChild">
                            <div>
                                <span>
                                    <button>
                                        <div style={{display: 'flex'}}>
                                            <div className="shareToIcon">
                                                <div>
                                                {link.svg}
                                                {/* <svg viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" style={svgIconStyle}>
                                                    <path d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78" fillRule="evenodd"></path>
                                                </svg> */}
                                                </div>
                                            </div>
                                            <div className="shareToText">
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