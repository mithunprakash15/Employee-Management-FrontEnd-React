import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [taskCompletion , settaskCompletion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      addEmployee({ name, phone , taskCompletion});
      setName('');
      setPhone('');
      settaskCompletion('');
    }
  };

  return (
    <div className="EmployeeForm">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          </div>
          <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            className="form-control"
            value={taskCompletion}
            onChange={(e) => settaskCompletion(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
