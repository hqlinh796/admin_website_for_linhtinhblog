import React from 'react';
import {Table} from 'react-bootstrap';
import TFoot from './TFoot';
import THead from './THead';
import TBody from './TBody';

const ManageCategoryTable = () => {
    return (
        
            <Table className="table-light shadow" hover>
                <THead />
                <TBody />
                <TFoot />
            </Table>
    );
};

export default ManageCategoryTable;