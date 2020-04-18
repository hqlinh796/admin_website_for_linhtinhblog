import React from 'react';
import {Col, Nav, InputGroup, Form, Button} from 'react-bootstrap';
import styles from './ManageBlogNavBar.module.css';

const ManageBlogNavBar = () => {
    return (
        <Col sm={12} className="bg-white mb-5">
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link eventKey="first" className={`${styles.navLink} fc-2 pl-0 pr-3 mr-3`}>Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second" className={`${styles.navLink} fc-2 pl-0 pr-3 mr-3`}>Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item className="ml-auto d-flex align-items-center">
                    <InputGroup size="sm">
                        <Form.Control type="text" />
                        <InputGroup.Append>
                            <Button >Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Nav.Item>
            </Nav>
        </Col>
    );
};

export default ManageBlogNavBar;