// src/components/LaptopLetter.js
import React, { useState } from 'react';

const LaptopLetter = ({ laptops = [], employees = [] }) => {
    const [selectedLaptop, setSelectedLaptop] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleLaptopSelect = (laptop) => {
        setSelectedLaptop(laptop);
    };

    const handleEmployeeSelect = (employee) => {
        setSelectedEmployee(employee);
    };

    return (
        <div className="laptop-letter-container">
            <h2>Responsibility Letter</h2>
            
            <div>
                <h3>Choose Laptop:</h3>
                <ul>
                    {laptops.length > 0 ? (
                        laptops.map((laptop, index) => (
                            <li key={index} onClick={() => handleLaptopSelect(laptop)}>
                                {laptop.model} - {laptop.brand}
                            </li>
                        ))
                    ) : (
                        <p>No laptops available</p>
                    )}
                </ul>
            </div>

            <div>
                <h3>Choose Employee:</h3>
                <ul>
                    {employees.length > 0 ? (
                        employees.map((employee, index) => (
                            <li key={index} onClick={() => handleEmployeeSelect(employee)}>
                                {employee.name}
                            </li>
                        ))
                    ) : (
                        <p>No employees available</p>
                    )}
                </ul>
            </div>

            <div className="selected-info">
                <h4>Selected Laptop:</h4>
                {selectedLaptop ? (
                    <p>{selectedLaptop.model} - {selectedLaptop.brand}</p>
                ) : (
                    <p>No laptop selected</p>
                )}

                <h4>Selected Employee:</h4>
                {selectedEmployee ? (
                    <p>{selectedEmployee.name}</p>
                ) : (
                    <p>No employee selected</p>
                )}
            </div>
        </div>
    );
};

export default LaptopLetter;
