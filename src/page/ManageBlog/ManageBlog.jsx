import React from 'react';
import {Header, LeftSideBar, Footer, ManageBlogMain } from '../../components';




const ManageBlog = () => {
    return (
        <React.Fragment>
            <Header />
            <LeftSideBar />
            <ManageBlogMain />
            <Footer />
        </React.Fragment>
    );
};

export default ManageBlog;