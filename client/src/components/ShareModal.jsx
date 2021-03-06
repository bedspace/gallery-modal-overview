import React, {Component} from 'react';
import ShareLinksModal from './ShareLinksModal.jsx';
import styles from '../cssModules/style.css';

class ShareModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const svgStyle = {
            height: '16px',
            width: '16px',
            display: 'block',
            fill: 'rgb(118, 118, 118)'
        }

        const { show } = this.props;
        const { hideModal } = this.props;
        console.log('SHOW VALUE IS ');
        console.log(show);
        return (
            show && (
                <div className={styles.shareModalBG}>
                    <div className={styles.shareModalParent}>
                        <div className={styles.shareModalChild}>
                            <div className={styles.shareModalDialog}>
                                <section>
                                    <div className={styles.shareModalGrandChild}>
                                        <div className={styles.shareExitButtonParent}>
                                            <button onClick={() => {hideModal('shareModalActive')}} className={styles.shareExitButton}>
                                            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={svgStyle}>
                                                <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd">
                                                </path>
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <header>
                                        <div className={styles.shareHeaderParent}>
                                            <h1>
                                                <div>Share</div>
                                            </h1>
                                        </div>
                                    </header>
                                    <section>
                                        <ShareLinksModal />
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