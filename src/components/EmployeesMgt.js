import React, { useState, useEffect } from 'react';

const EmployeesMgt = () => {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({ id: '', name: '', department: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Load employees from localStorage when the component mounts
        const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(savedEmployees);
    }, []);

    const saveToLocalStorage = (employees) => {
        localStorage.setItem('employees', JSON.stringify(employees));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let updatedEmployees;
        if (isEditing) {
            updatedEmployees = employees.map((emp) => (emp.id === employee.id ? employee : emp));
            setIsEditing(false);
        } else {
            updatedEmployees = [...employees, { ...employee, id: Date.now().toString() }];
        }
        setEmployees(updatedEmployees);
        saveToLocalStorage(updatedEmployees);
        setEmployee({ id: '', name: '', department: '' });
    };

    const handleEdit = (emp) => {
        setEmployee(emp);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        const updatedEmployees = employees.filter((emp) => emp.id !== id);
        setEmployees(updatedEmployees);
        saveToLocalStorage(updatedEmployees);
    };

    return (
        <div>
            <h2>Employee Management</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={employee.department}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
            </form>
            <ul>
                {employees.map((emp) => (
                    <li key={emp.id}>
                        {emp.name} - {emp.department}
                        <button onClick={() => handleEdit(emp)}>Edit</button>
                        <button onClick={() => handleDelete(emp.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeesMgt;