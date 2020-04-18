import React, { Fragment } from 'react';
import {Tab} from 'react-bootstrap';
import styles from './ManageBlogMain.module.css';
import {ManageBlogNavBar, ManageBlogContent, ManageBlogToolBar } from '../index';

const ManageBlogMain = () => {
    return (
        <React.Fragment>
            
            <section className={`${styles.wrapper} bg-light py-3 container-fluid`}>
                <h2 className="page-title pl-3 ">
                    Manage
            </h2>
                <section className="content px-3 row">
                    
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <ManageBlogNavBar />
                        
                        <ManageBlogContent />
                    </Tab.Container>
                </section>
            </section>
        </React.Fragment>
    );
};

export default ManageBlogMain;