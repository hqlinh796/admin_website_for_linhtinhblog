import React, { useState } from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {TextEditor} from '../index';

const NewBlogForm = (props) => {

    // const [title, setTitle] = useState('');
    // const [category, setCategory] = useState('');
    // const [author, setAuthor] = useState('');
    // const [tags, setTags] = useState('');
    // const [description, setDescription] = useState('');
    // const [content, setContent] = useState('');
    const [isFileUpload, setFileUpload] = useState(false);
    const [coverURL, setCoverURL] = useState('true');
    const [coverFile, setCoverFile] = useState('');
    
    const onSave = async (e) => {
        e.preventDefault();
        const content = await getContent();
        
    }

    const escapeID = (text) => text.replace('&amp;id', '&id');

    const getContent = async () => {
        //get content
        const editor = window.tinymce.activeEditor;
        let content = '';
        await editor.uploadImages(function(success) {
            content = editor.getContent();
            content = escapeID(content);
        }) 
        return content;
    }

    const uploadCover = async () => {
        
    }

    const readURL = (e) => {
        if (!isFileUpload) {
            props.setCover(e.target.value);
            return ;
        }

        console.log(e.target);
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                props.setCover(e.target.result);
                return; 
            }
            reader.readAsDataURL(e.target.files[0]); // convert to base64 string
        }
    }

    const {setTitle, setCategory, setContent, setAuthor, setTags, setDescription} = props;

    return (
        <Form id="form-add-new-post">
            <Form.Row>
                <Form.Group as={Col} md="6" controlID="f-title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" required 
                    onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col} md={{span: 4, offset: 2}} controlID="f-category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" required 
                    onChange={(e) => setCategory(e.target.value)}>
                        <option>Choose</option>
                        <option>Đời sống</option>
                        <option>Giải trí</option>
                        <option>Thể thao</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlID="f-author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" name="author" required defaultValue="Linh Hà"
                    onChange={(e) => setAuthor(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col} controlID="f-tags">
                    <Form.Label>Tags</Form.Label>
                    <span className="font-weight-normal"> (Use space character ' ' to seperate among tags) </span>
                    <Form.Control type="text" name="tags" required
                    onChange={(e) => setTags(e.target.value)}/>
                </Form.Group>
            </Form.Row>
            <Form.Group controlID="f-description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="text" name="description" required 
                rows={4} maxLength={250} defaultValue={""}
                onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group controlID="f-cover">
                <Form.Label>Cover</Form.Label>
                <div >
                    <Form.Check type="radio" label="URL" id="cover-url-radio" name="f-cover" 
                    checked={!isFileUpload}
                    onChange={() => setFileUpload(!isFileUpload)}/>
                    <Form.Control type="input" 
                    disabled={isFileUpload}
                    onChange={readURL}/>

                    <Form.Check type="radio" label="Upload" id="cover-file-radio" name="f-cover" 
                    checked={isFileUpload} 
                    onChange={() => setFileUpload(!isFileUpload)}/>
                    <Form.File 
                    disabled={!isFileUpload}
                    onChange={readURL} 
                    />
                </div>
            </Form.Group>
            <Form.Group controlID="f-content">
                <Form.Label>Content</Form.Label>
                <TextEditor setContent={setContent}/>
            </Form.Group>
            <Button id="save-button" className="my-4" variant="primary" type="submit" onClick={onSave}>Save</Button>
            <Button id="btn1" className="mx-2" variant="primary">Publish</Button>
            <Button id="thumbnail-preview-button" className="mx-2" variant="primary" 
            onClick={() => props.previewBlogThumbnaillModal(true)}>
                Thumbnail Priview
            </Button>
            <Button id="post-detail-preview-button" className="mx-2" variant="primary" 
            onClick={() => props.previewBlogDetailModal(true)} >
                Post Preview
            </Button>
        </Form>

    );
};

export default NewBlogForm;