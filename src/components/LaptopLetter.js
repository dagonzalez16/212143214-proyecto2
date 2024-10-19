import React from 'react';
import './LaptopLetter.css';

const LaptopLetter = ({ laptop, employee }) => {
    return (
        <div className="letter">
            <h2>Contrato de Uso de Laptop</h2>
            <p><strong>Marca:</strong> {laptop.brand}</p>
            <p><strong>Modelo:</strong> {laptop.model}</p>
            <p><strong>Empleado:</strong> {employee.name}</p>
            <p><strong>Posición:</strong> {employee.position}</p>
            <p><strong>Fecha:</strong> {new Date().toLocaleDateString()}</p>
            <p>
                Yo, {employee.name}, confirmo que he recibido la laptop mencionada anteriormente y
                me comprometo a utilizarla de acuerdo con las políticas de la empresa. Entiendo que
                es mi responsabilidad cuidarla y devolverla en buen estado.
            </p>
            <p>Firma: ________________________</p>
        </div>
    );
};

export default LaptopLetter;