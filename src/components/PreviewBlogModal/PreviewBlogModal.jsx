import React, { Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import styles from './PreviewBlogModal.module.css';
const urlRelated = 'https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'

const PreviewBlogModal = (props) => {

    const {title, author, category, content, cover} = props;
    

    return (
        <Modal show={props.isShow} onHide={props.closeModal} size="lg">
            <Modal.Body>
                <div className={styles.wrapper}>
                    <div className={styles.postDetail}>
                        <img src={cover} alt="" />
                        <div >
                            <h1 className={styles.postDetailTitle}>{title}</h1>
                            <div className={styles.dateAndCategory}>
                                <span className="post-detail-date">{(new Date).toDateString()}</span>
                                <span>&nbsp; | &nbsp;</span>
                                <span className="post-detail-category">{category}</span>
                            </div>
                            <div className={styles.author}>
                                <i className="fas fa-book-reader" />
                                <span className>{author}</span>
                            </div>
                            <div className={styles.postDetailContent}
                            dangerouslySetInnerHTML={{__html: content}}> 
                            </div>
                        </div>
                    </div>
                    <div className={styles.rateWrapper}>
                        <div >
                            <span>Your rate: </span>
                            <i className={`fas fa-star ${styles.rated}`} id="level1"> </i>
                            <i className={`fas fa-star ${styles.rated}`} id="level2"> </i>
                            <i className={`fas fa-star ${styles.rated}`} id="level3"> </i>
                            <i className="fas fa-star" id="level4"> </i>
                            <i className="fas fa-star" id="level5"> </i>
                        </div>
                        <div className="rate">
                            <span>Rate: 4.7 </span>
                            <span>(3 votes)</span>
                        </div>
                    </div>
                    <div className={styles.relatedPostWrapper}>
                        <div>
                            <h3>Related posts</h3>
                            <div className="row">
                                <div className={`col-md-4 ${styles.relatedPostItem}`}>
                                    <img alt="this is a related post" className={styles.relatedThumbnail} src={urlRelated} />
                                    <a href="#">This is the first related post</a>
                                </div>
                                <div className={`col-md-4 ${styles.relatedPostItem}`}>
                                    <img alt="this is a related post" className={styles.relatedThumbnail} src={urlRelated} />
                                    <a href="#">This is the second related post</a>
                                </div>
                                <div className={`col-md-4 ${styles.relatedPostItem}`}>
                                    <img alt="this is a related post" className={styles.relatedThumbnail} src={urlRelated} />
                                    <a href="#">This is the second related post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default PreviewBlogModal;