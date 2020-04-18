import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';

const THead = () => {
    return (
        <thead className="thead-light">
            <tr>
                <th>Select</th>
                <th>No.</th>
                <th>Title</th>
                <th>
                <Dropdown>
                    <Dropdown.Toggle as="a">
                        Category
                    </Dropdown.Toggle>
                    <Dropdown.Menu alignRight>
                    <Dropdown.Item href="#">All</Dropdown.Item>
                    <Dropdown.Item href="#">Sports</Dropdown.Item>
                    <Dropdown.Item href="#">Tips</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </th>
                <th>
                    Date created
                    <a href="#" className="fas fa-sort text-reset" />
                </th>
                <th>
                    Rating
                    <a href="#" className="fas fa-sort text-reset" />
                </th>
                <th>
                    Status
                    <a href="#" className="fas fa-sort text-reset" />
                </th>
                <th>Options</th>
            </tr>
        </thead>

    );
};

export default THead;