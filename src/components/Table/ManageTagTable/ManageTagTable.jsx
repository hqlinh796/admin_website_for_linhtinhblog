import React from 'react';
import { Table } from 'react-bootstrap';
import THead from './THead';
import TBody from './TBody';
import TFoot from './TFoot';

const ManageTagTable = () => {
    return (
        <Table className="table-light shadow" hover>
            <THead />
            <TBody />
            <TFoot />
        </Table>

    );
};

export default ManageTagTable;