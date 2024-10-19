import React, { useState, useEffect } from 'react';
import LaptopForm from './components/LaptopForm';
import LaptopList from './components/LaptopList';

const App = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        const savedLaptops = JSON.parse(localStorage.getItem('laptops')) || [];
        setLaptops(savedLaptops);
    }, []);

    const saveToLocalStorage = (laptops) => {
        localStorage.setItem('laptops', JSON.stringify(laptops));
    };

    const addLaptop = (laptop) => {
        const newLaptops = [...laptops, laptop];
        setLaptops(newLaptops);
        saveToLocalStorage(newLaptops);
    };

    const updateLaptop = (index, updatedLaptop) => {
        const newLaptops = laptops.map((laptop, i) => (i === index ? updatedLaptop : laptop));
        setLaptops(newLaptops);
        saveToLocalStorage(newLaptops);
    };

    const deleteLaptop = (index) => {
        const newLaptops = laptops.filter((_, i) => i !== index);
        setLaptops(newLaptops);
        saveToLocalStorage(newLaptops);
    };

    return (
        <div>
            <h1>Inventario de Laptops</h1>
            <LaptopForm addLaptop={addLaptop} />
            <LaptopList laptops={laptops} updateLaptop={updateLaptop} deleteLaptop={deleteLaptop} />
        </div>
    );
};

export default App;