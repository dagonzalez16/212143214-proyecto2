// src/App.js
import React, { useState, useEffect } from 'react';
import LaptopForm from './components/LaptopForm';
import LaptopList from './components/LaptopList';
import EmployeesMgt from './components/EmployeesMgt';
import LaptopLetter from './components/LaptopLetter';
import './App.css';

const App = () => {
    const [laptops, setLaptops] = useState([]);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const savedLaptops = JSON.parse(localStorage.getItem('laptops')) || [];
        const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setLaptops(savedLaptops);
        setEmployees(savedEmployees);
    }, []);

    const saveToLocalStorage = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const addLaptop = (laptop) => {
        const newLaptops = [...laptops, laptop];
        setLaptops(newLaptops);
        saveToLocalStorage('laptops', newLaptops);
    };

    const updateLaptop = (index, updatedLaptop) => {
        const newLaptops = laptops.map((laptop, i) => (i === index ? updatedLaptop : laptop));
        setLaptops(newLaptops);
        saveToLocalStorage('laptops', newLaptops);
    };

    const deleteLaptop = (index) => {
        const newLaptops = laptops.filter((_, i) => i !== index);
        setLaptops(newLaptops);
        saveToLocalStorage('laptops', newLaptops);
    };

    const addEmployee = (employee) => {
        const newEmployees = [...employees, employee];
        setEmployees(newEmployees);
        saveToLocalStorage('employees', newEmployees);
    };

    const updateEmployee = (index, updatedEmployee) => {
        const newEmployees = employees.map((employee, i) => (i === index ? updatedEmployee : employee));
        setEmployees(newEmployees);
        saveToLocalStorage('employees', newEmployees);
    };

    const deleteEmployee = (index) => {
        const newEmployees = employees.filter((_, i) => i !== index);
        setEmployees(newEmployees);
        saveToLocalStorage('employees', newEmployees);
    };

    return (
        <div>
            <h1>Inventory Management System</h1>
            <LaptopForm addLaptop={addLaptop} />
            <LaptopList laptops={laptops} updateLaptop={updateLaptop} deleteLaptop={deleteLaptop} />
            <EmployeesMgt 
                employees={employees} 
                addEmployee={addEmployee} 
                updateEmployee={updateEmployee} 
                deleteEmployee={deleteEmployee} 
            />
            <LaptopLetter laptops={laptops} employees={employees} />
        </div>
    );
};

export default App;
