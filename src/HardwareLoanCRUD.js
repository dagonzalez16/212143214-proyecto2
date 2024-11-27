import React, { useState } from 'react';

function HardwareLoanCRUD({ setPage }) {
  const [loans, setLoans] = useState([]);
  const [newDevice, setNewDevice] = useState('');
  const [newResponsible, setNewResponsible] = useState('');
  const [newLoanId, setNewLoanId] = useState('');
  const [updatedLoanId, setUpdatedLoanId] = useState('');

  // Agregar un nuevo préstamo
  const addLoan = (e) => {
    e.preventDefault();
    if (newDevice.trim() === '' || newResponsible.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
    const newLoan = {
      id: newLoanId || Date.now(), // Si no hay un ID especificado, se usa el timestamp
      device: newDevice,
      responsible: newResponsible,
    };
    setLoans([...loans, newLoan]);
    setNewDevice('');
    setNewResponsible('');
    setNewLoanId('');
  };

  // Eliminar un préstamo por ID
  const deleteLoan = (id) => {
    setLoans(loans.filter(loan => loan.id !== id));
  };

  // Editar un préstamo por ID
  const editLoan = (id) => {
    const loanToEdit = loans.find(loan => loan.id === id);
    if (loanToEdit) {
      setNewLoanId(loanToEdit.id);
      setNewDevice(loanToEdit.device);
      setNewResponsible(loanToEdit.responsible);
    }
  };

  return (
    <div className="crud">
      {/* Botón para volver a la página de inicio */}
      <button
        onClick={() => setPage('home')}
        style={{
          backgroundColor: '#4a90e2',
          color: '#ffffff',
          border: 'none',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
          display: 'block',
        }}
      >
        Volver a Inicio
      </button>

      <h2>Gestión de Préstamos de Hardware</h2>

      {/* Formulario de entrada para agregar nuevos préstamos */}
      <form onSubmit={addLoan} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="ID de Préstamo"
          value={newLoanId}
          onChange={(e) => setNewLoanId(e.target.value)}
          style={{
            marginRight: '10px',
            padding: '8px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '150px',
          }}
        />
        <input
          type="text"
          placeholder="Dispositivo"
          value={newDevice}
          onChange={(e) => setNewDevice(e.target.value)}
          style={{
            marginRight: '10px',
            padding: '8px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '200px',
          }}
        />
        <input
          type="text"
          placeholder="Responsable"
          value={newResponsible}
          onChange={(e) => setNewResponsible(e.target.value)}
          style={{
            marginRight: '10px',
            padding: '8px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '200px',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#4a90e2',
            color: '#ffffff',
            border: 'none',
            padding: '8px 15px',
            fontSize: '1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          {newLoanId ? 'Actualizar Préstamo' : 'Agregar Préstamo'}
        </button>
      </form>

      {/* Tabla de préstamos */}
      <h3>Lista de Préstamos</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dispositivo</th>
            <th>Responsable</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.device}</td>
              <td>{loan.responsible}</td>
              <td>
                <button
                  onClick={() => editLoan(loan.id)}
                  style={{
                    backgroundColor: '#4a90e2',
                    color: '#ffffff',
                    border: 'none',
                    padding: '5px 10px',
                    fontSize: '0.9rem',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    marginRight: '5px',
                    transition: 'background-color 0.3s',
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteLoan(loan.id)}
                  style={{
                    backgroundColor: '#e94e77',
                    color: '#ffffff',
                    border: 'none',
                    padding: '5px 10px',
                    fontSize: '0.9rem',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HardwareLoanCRUD;