import React, { useState, useEffect } from 'react';

const LoanForm = ({ addOrUpdateLoan, currentLoan, resetCurrentLoan }) => {
  const [loan, setLoan] = useState({ id: '', usuario: '', objetoPrestado: '' });

  useEffect(() => {
    if (currentLoan) {
      setLoan(currentLoan);
    }
  }, [currentLoan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoan({ ...loan, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateLoan(loan);
    setLoan({ id: '', usuario: '', objetoPrestado: '' });
    resetCurrentLoan();
  };

  return (
    <form onSubmit={handleSubmit}><input
        type="text"
        name="usuario"
        placeholder="Usuario"
        value={loan.usuario}
        onChange={handleChange}
        required
      /><input
        type="text"
        name="objetoPrestado"
        placeholder="Objeto Prestado"
        value={loan.objetoPrestado}
        onChange={handleChange}
        required
      /><button type="submit">{loan.id ? 'Actualizar' : 'Añadir'}</button></form>
  );
};

export default LoanForm;