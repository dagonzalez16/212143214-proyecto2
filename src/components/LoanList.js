import React from 'react';

const LoanList = ({ loans, editLoan, deleteLoan }) => {
  return (
    <table><thead><tr><th>ID Préstamo</th><th>Usuario</th><th>Objeto Prestado</th><th>Acciones</th></tr></thead><tbody>
        {loans.map((loan) => (
          <tr key={loan.id}><td>{loan.id}</td><td>{loan.usuario}</td><td>{loan.objetoPrestado}</td><td><button onClick={() => editLoan(loan)}>Editar</button><button onClick={() => deleteLoan(loan.id)}>Eliminar</button></td></tr>
        ))}
      </tbody></table>
  );
};

export default LoanList;