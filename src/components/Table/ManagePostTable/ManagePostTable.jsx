import React from 'react';
import THead from './THead';
import TBody from './TBody';
import TFoot from './TFoot';
import {Table} from 'react-bootstrap';

const ManagePostTable = () => {

    return (
        <Table className="table-light shadow col-12" hover>
            <THead />
            <TBody />
            <TFoot />
        </Table>
    );
}

export default ManagePostTable;