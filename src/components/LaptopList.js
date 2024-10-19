import React from 'react';

const LaptopList = ({ laptops, updateLaptop, deleteLaptop }) => {
    return (
        <ul>
            {laptops.map((laptop, index) => (
                <li key={index}>
                    {laptop.brand} - {laptop.model}
                    <button onClick={() => updateLaptop(index, { ...laptop, model: 'Nuevo Modelo' })}>Editar</button>
                    <button onClick={() => deleteLaptop(index)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default LaptopList;