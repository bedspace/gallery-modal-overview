import React, {Component} from 'react';
import ShareLinksModal from './ShareLinksModal.jsx';


class ShareModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
// height: 18px; width: 18px; display: block; fill: rgb(72, 72, 72);
        // height: 16px; width: 16px; display: block; fill: rgb(118, 118, 118);
        const svgStyle = {
            height: '16px',
            width: '16px',
            display: 'block',
            fill: 'rgb(118, 118, 118)'
        }

        const { show } = this.props;
        const { shareLinks } = this.props;
        console.log('SHOW VALUE IS ');
        console.log(show);
        return (
            show && (
                <div className="shareModalBG">
                    <div className="shareModalParent">
                        <div className="shareModalChild">
                            <div className="shareModalDialog">
                                <section>
                                    <div className="shareModalGrandChild">
                                        <div className="shareExitButtonParent">
                                            <button className="shareExitButton">
                                            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={svgStyle}>
                                                <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd">
                                                </path>
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <header>
                                        <div className="shareHeaderParent">
                                            <h1>
                                                <div>Share</div>
                                            </h1>
                                        </div>
                                    </header>
                                    <section>
                                        <ShareLinksModal shareLinks={shareLinks}/>
                                        {/* <div className="shareTo">
                                            <div className="shareToChild">
                                                <div>
                                                    <span>
                                                        <button>
                                                            <div style={{display: 'flex'}}>
                                                                <div className="shareToIcon">
                                                                    <div>
                                                                    <svg viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" style={svgIconStyle}>
                                                                        <path d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78" fillRule="evenodd"></path>
                                                                    </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="shareToText">
                                                                    <div>FaceBook</div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}
                                    </section>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }
}

export default ShareModal;