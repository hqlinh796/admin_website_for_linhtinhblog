import React from 'react';
import {Col, Tab, Row} from 'react-bootstrap';
import {ManagePostTable, ManageCategoryTable, ManageTagTable, ManageBlogToolBar} from '../index';

const ManageBlogContent = () => {
    return (
        <Col sm={12}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <ManageBlogToolBar />
                    <ManagePostTable />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <Row>
                        <Col sm={6}>
                            <ManageCategoryTable />
                        </Col>
                        <Col sm={6}>
                            <ManageTagTable />
                        </Col>
                    </Row>
                </Tab.Pane>
            </Tab.Content>
        </Col>
    );
};

export default ManageBlogContent;