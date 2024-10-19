import React, { useState } from 'react';

const LaptopForm = ({ addLaptop }) => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (brand && model) {
            addLaptop({ brand, model });
            setBrand('');
            setModel('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Marca" value={brand} onChange={(e) => setBrand(e.target.value)} />
            <input type="text" placeholder="Modelo" value={model} onChange={(e) => setModel(e.target.value)} />
            <button type="submit">Agregar Laptop</button>
        </form>
    );
};

export default LaptopForm;