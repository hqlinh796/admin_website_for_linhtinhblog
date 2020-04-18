import React from 'react';
import {Accordion, Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import styles from './LeftSideBar.module.css';

const LeftSideBar = () => {
    return (
        <section className={`${styles.leftbarWrapper} bg-dark h-100 text-light px-2`}>
            <div className={styles.leftBar}>
                <div className={`${styles.logo} mb-5`}>
                    <img className="rounded-circle" style={{ height: '30px' }} alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
                    <h5 className="ml-2 mb-0">Admin template</h5>
                </div>
                <div className="text-light">
                    <Accordion className={styles.backgroundTransparent} defaultActiveKey="2">
                    <Card className={`${styles.backgroundTransparent} border-0 ${styles.leftBarContent}`}>
                            <Card.Header className={`${styles.backgroundTransparent} p-0`}>
                                <Accordion.Toggle as="a" className={styles.leftBarLink} eventKey="0">
                                    <div>
                                        <i className="fas fa-home mr-2 fc-1" />
                                        <span className={styles.leftbarItemTitle}>
                                            Dashboard
                                    </span>
                                    </div>
                                    <div>
                                        <i className="fas fa-chevron-left" />
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body as="ul" className="list-unstyled  mb-0 p-0">
                                        <li className={styles.leftBarSubItem}>
                                            <a>
                                                <i className="far fa-circle mr-2" />
                                                Item 1
                                            </a>
                                        </li>
                                        <li className={styles.leftBarSubItem}>
                                            <a>
                                                <i className="far fa-circle mr-2" />
                                                Item 1
                                            </a>
                                        </li>
                                        <li className={styles.leftBarSubItem}>
                                            <a>
                                                <i className="far fa-circle mr-2" />
                                                Item 1
                                            </a>
                                        </li>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                    <Card className={`${styles.backgroundTransparent} border-0 ${styles.leftBarContent}`}>
                            <Card.Header className={`${styles.backgroundTransparent}  p-0`}>
                                <Accordion.Toggle as="a" eventKey="1" className={styles.leftBarLink}>
                                    <div>
                                        <i className="fas fa-home mr-2 fc-1" />
                                        <span className={styles.leftbarItemTitle}>
                                            Tool 1
                                    </span>
                                    </div>
                                    <div>
                                        
                                    </div>
                                    
                                </Accordion.Toggle>
                            
                            </Card.Header>
                        </Card>                   
                    <Card className={`${styles.backgroundTransparent} border-0 ${styles.leftBarContent}`}>
                            <Card.Header className={`${styles.backgroundTransparent}  p-0 ${styles.active}`}>
                                <Accordion.Toggle as="a" className={styles.leftBarLink} eventKey="2">
                                    <div>
                                        <i className="fas fa-pen-square mr-2 fc-1" />
                                        <span className={styles.leftbarItemTitle}>
                                            Post
                                    </span>
                                    </div>
                                    <div>
                                        <i className="fas fa-chevron-left" />
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body as="ul" className="list-unstyled  mb-0 p-0">
                                        <li className={styles.leftBarSubItem}>
                                            <NavLink to="/new-blog">
                                                <i className="far fa-circle mr-2" />
                                                New post
                                            </NavLink>
                                        </li>
                                        <li className={styles.leftBarSubItem}>
                                            <NavLink to="/manage-blog">
                                                <i className="far fa-circle mr-2" />
                                                Manage post
                                            </NavLink>
                                        </li>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                    <Card className={`${styles.backgroundTransparent} border-0 ${styles.leftBarContent}`}>
                            <Card.Header className={`${styles.backgroundTransparent} p-0`}>
                                <Accordion.Toggle as="a" eventKey="3" className={styles.leftBarLink}>
                                    <div>
                                        <i className="fas fa-home mr-2 fc-1" />
                                        <span className={styles.leftbarItemTitle}>
                                            Dashboard
                                    </span>
                                    </div>
                                    <div>
                                        
                                    </div>
                                    
                                </Accordion.Toggle>
                            
                            </Card.Header>
                        </Card>                   
                    </Accordion>
                </div>
            </div>
        </section>

    );
};

export default LeftSideBar;