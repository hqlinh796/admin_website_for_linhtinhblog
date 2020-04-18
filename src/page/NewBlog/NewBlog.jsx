import React from 'react';
import {Header, LeftSideBar, Footer, NewBlogMain } from '../../components';

const NewBlog = () => {
    return (
        <React.Fragment>
            <Header />
            <LeftSideBar />
            <NewBlogMain />
            <Footer />
        </React.Fragment>
    );
};

export default NewBlog;