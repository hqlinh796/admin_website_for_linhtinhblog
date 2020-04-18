import React from 'react';
import {Pagination} from 'react-bootstrap';

const TFoot = () => {
    return (
        <tfoot className>
            <tr>
                <th colSpan={8}>
                    <Pagination className="justify-content-end mb-0">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>
                            1
                        </Pagination.Item>
                        <Pagination.Item>
                            2
                        </Pagination.Item>
                        <Pagination.Item>
                            3
                        </Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </th>
            </tr>
        </tfoot>
    );
};

export default TFoot;