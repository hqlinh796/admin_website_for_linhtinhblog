import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './PreviewThumbnailModal.module.css';

const PreviewThumbnailModal = (props) => {
    const {cover, title, description, category, tags, isShow} = props;
    const getMonth = () => {
        const monthNum = new Date().getMonth() + 1;
        return month[monthNum];
    }

    const month = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec'
    }

    const getTags = (tags) => {
        const tagArray = tags.split(' ');
        let result = '';
        if (tagArray.length)
            return tagArray.map(tag => (
                 <a href="#" className={styles.tag}>#{tag} </a>
            ))
        else 
            return ''
    }
    return (
        <Modal show={isShow} onHide={props.closeModal}>
            <Modal.Header>
                <h5 className="modal-title" id="my-modal-title">
                    <span className="fc-2 font-weight-bold">
                        Post thumbnail
                    </span>
                </h5>
                <button className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div>
                        <div className={styles.wrapper}>
                            <img src={cover} alt="thumbnail-blog-detail" className="post-img-thumbnail" />
                            <div className={styles.main}>
                                <div className={styles.dateAndMonth}>
                                    <div className="text-center">
                                        <p className={styles.date}>{new Date().getDate()}</p>
                                        <p className={styles.month}>{getMonth()}</p>
                                    </div>
                                </div>
                                <a href="#" className={styles.title}>{title}</a>
                                <p className={styles.description}>{description}</p>
                                <div className={styles.category}>
                                    <i className="fas fa-book-open" />
                                    &nbsp;
                                    <span>{category}</span>
                                    &nbsp;
                            </div>
                                <div className={styles.tagWrapper}>
                                    <span>Tags: </span>
                                    {getTags(tags)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>

    );
};

export default PreviewThumbnailModal;