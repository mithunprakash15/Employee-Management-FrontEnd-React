import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  
  
  useEffect(() => {
    
    const mockData = [
      { id: 1, name: 'John', phone: '1234567890', taskCompletion: 8, photo: 'john.jpg' },
      { id: 2, name: 'Jane', phone: '9876543210', taskCompletion: 5, photo: 'jane.jpg' },
    ];
    setEmployees(mockData);
    setFilteredEmployees(mockData);
  }, []);

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: employees.length + 1 };
    setEmployees([...employees, newEmployee]);
    setFilteredEmployees([...filteredEmployees, newEmployee]);
    setShowForm(false);
  };
  const searchEmployees = (query) => {
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };
 
  return (
    <div >
      <Header onAddEmployee={() => setShowForm(true)} onSearch={searchEmployees} />

      <div className="container">
        {showForm && <EmployeeForm addEmployee={addEmployee} />}
        
        <EmployeeList employees={filteredEmployees} />
      </div>
    </div>
  );
}

export default App;
