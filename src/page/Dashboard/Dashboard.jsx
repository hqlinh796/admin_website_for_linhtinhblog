import React from 'react';
import {Header, LeftSideBar, Footer, ManageBlogMain } from '../../components';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Header />
            <LeftSideBar />
            <section className="main-wrapper bg-light">
                <div className="content">
                    Content
            </div>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default Dashboard;