import React from 'react';
import {Button, Form} from 'react-bootstrap';
import styles from './ManageBlogToolBar.module.css';

const ManageBlogToolBar = () => {
    return (
        <div className="bg-light d-flex justify-content-between py-3">
            <div>
                <Button variant="info" size="sm" className="mr-2">
                    <a href="new-post.html" className="text-reset">Add</a>
                </Button>
                <Button variant="primary" size="sm" className="mr-2">Delete</Button>
                <Button variant="primary" size="sm" className="mr-2">Publish</Button>
                <Button variant="primary" size="sm">Hide</Button>
            </div>
            <div className="d-flex align-items-center">
                <Form inline>
                    <Form.Group className="mr-4 align-items-center">
                        <Form.Label htmlFor="my-select">Rows &nbsp;</Form.Label>
                        <Form.Control id="my-select" as="select" className={`${styles.formSelect} d-inline-block`} inline>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <div className="num-posts d-inline-block">
                    1 - 6 | 23
                </div>
            </div>
        </div>
    );
};

export default ManageBlogToolBar;