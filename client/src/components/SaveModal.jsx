import React , {Component} from 'react';
import styles from '../cssModules/style.css';

class SaveModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const exitButtonStyle = {
            height: '16px',
            width: '16px',
            display: 'block',
            fill: 'rgb(118,118,118)'
        }

        const { show, hideModal } = this.props;
        return (
            show && (
                <div className={styles.saveModalBG}>
                    <div className={styles.saveModalParent}>
                        <div className={styles.saveModalChild}>
                            <div className={styles.saveModalDialog}>
                                <section>
                                    <div className={styles.saveModalGrandChild}>
                                        <div className={styles.saveExitButtonParent}>
                                            <button onClick={() => {hideModal()}} className={styles.saveExitButton}>
                                                <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={exitButtonStyle}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                        <header>
                                            <div className={styles.saveHeaderParent}>
                                                <h1>
                                                    <div>Save To List</div>
                                                </h1>
                                            </div>
                                        </header>
                                        <section>
                                            <div>
                                                <div className={styles.createListParent}>
                                                    <div className={styles.createListChild}>
                                                        <div className={styles.createListGrandChild}>
                                                            <button>Create New List</button>
                                                        </div>
                                                    </div>
                                                    <div></div>
                                                </div>
                                            </div>
                                            <div className={styles.currentHouseListing}>
                                                <div>
                                                    <button>
                                                        <div>
                                                            <div className={styles.houseIconParent}>
                                                                <div></div>
                                                            </div>
                                                            <div className={styles.houseListingDetails}>
                                                                <div className={styles.houseListingTitleParent}>
                                                                    <div className={styles.houseListingTitleChild}>
                                                                        <div>Little House In Paris, Loft, Canal</div>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.houseLocation}>
                                                                    <div>Paris, Île-de-France, France</div>
                                                                </div>
                                                                <div className={styles.reviewStarsParent}>
                                                                    <div>
                                                                        <span className={styles.reviewStarsChild}>
                                                                            <img src="https://fecimageshrsf119.s3-us-west-1.amazonaws.com/stars.png" className={styles.reviewStarsGrandChild}></img>
                                                                        </span>
                                                                        <span></span>
                                                                        <span>
                                                                            <span className={styles.reviewCount}>
                                                                                183 Reviews
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className={styles.cushion}></div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }
}

export default SaveModal;
