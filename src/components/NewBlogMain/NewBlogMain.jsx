import React, { useState } from 'react';
import {NewBlogForm} from '../index';
import {Container} from 'react-bootstrap';
import styles from './NewBlogMain.module.css';
import {PreviewBlogModal, PreviewThumbnailModal} from '../index';

const NewBlogMain = () => {

    const [isShowBlog, setShowBlog] = useState(false);
    const [isShowThumbnail, setShowThumbnail] = useState(false);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('Linh Ha');
    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [cover, setCover] = useState('');
    const [coverFile, setCoverFile] = useState('');

    return (
        <Container className={`${styles.wrapper} new-post bg-light py-3`} fluid>
            <h2 className="page-title pl-3 ">
                Add new
            </h2>
            <section className="content px-3 row">
                <div className="col-12">
                    <NewBlogForm 
                    previewBlogDetailModal = {setShowBlog}
                    previewBlogThumbnaillModal = {setShowThumbnail}
                    setTitle = {setTitle}
                    setCategory = {setCategory}
                    setAuthor = {setAuthor}
                    setTags = {setTags}
                    setDescription = {setDescription}
                    setContent = {setContent}
                    setCover = {setCover}
                    />
                </div>
                
                    <PreviewBlogModal 
                    isShow = {isShowBlog} 
                    closeModal = { () => setShowBlog(false) }
                    title = {title}
                    category = {category}
                    author = {author}
                    tags = {tags}
                    description = {description}
                    content = {content}
                    cover = {cover}
                    />

                    <PreviewThumbnailModal 
                    isShow = {isShowThumbnail} 
                    closeModal = { () => setShowThumbnail(false) }
                    cover = {cover} 
                    title = {title}
                    description = {description} 
                    category = {category}
                    tags={tags}
                    />
                
                 </section>
        </Container>
    );
};

export default NewBlogMain;