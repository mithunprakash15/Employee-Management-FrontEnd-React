import React from 'react';

function EmployeeList({ employees }) {
  return (
    <div className="EmployeeList">
      
      <table className="EmployeeTable">
        <thead>
          <tr>
          <th>Photo</th>
            <th>ID</th>
            
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                <td>
                <img src={employee.photo} alt={employee.name} className="EmployeePhoto" />
              </td>
              <td>{employee.id}</td>
              
              <td>{employee.name}</td>
              <td>{employee.phone}</td>
              <td style={{color : 'green'}}>{employee.taskCompletion} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
