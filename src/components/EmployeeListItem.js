import React from 'react';

function EmployeeListItem({ emp }) {
    return (
        <div>
            <h2>{emp.name}</h2>
            <h2>{emp.role}</h2>
        </div>
    );
}

export default EmployeeListItem;