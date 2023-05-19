import React from 'react';
import employees from '../data/EmployeeData';
import EmployeeListItem from './EmployeeListItem';

function EmployeeList() {
    return (
        <div>
            {employees.map((emp) => {
                return (
                    <div>
                        <EmployeeListItem emp={emp} />
                    </div>
                );
            }
            )}
        </div>
    );
}

export default EmployeeList;
