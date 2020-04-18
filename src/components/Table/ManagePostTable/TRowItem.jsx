import React from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';

const TRowItem = () => {
    return (
        <tr>
            <td>
                <input type="checkbox" name="select" id />
            </td>
            <td>1</td>
            <td>
                <a href="#post-detail-preview-modal" className="modal-toggle text-reset" data-toggle="modal">
                    This is the first title
                                        </a>
            </td>
            <td>Cuoc song</td>
            <td>22/12/2019</td>
            <td>4.89</td>
            <td><span className="badge badge-success">Saved</span></td>
            <td>
                <DropdownButton
                    title="Choose"
                    alignRight
                >
                    <Dropdown.Item href="#">CN1</Dropdown.Item>
                    <Dropdown.Item href="#">CN2</Dropdown.Item>
                </DropdownButton>
            </td>
        </tr>

    );
};

export default TRowItem;