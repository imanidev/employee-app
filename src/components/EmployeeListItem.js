import React from 'react';

function EmployeeListItem({ emp }) {
    return (
        <div>
            <h2>{emp.name}</h2>
            <h4>{emp.role}</h4>
        </div>
    );
}

export default EmployeeListItem;