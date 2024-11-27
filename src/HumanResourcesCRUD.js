import React, { useState } from 'react';

function HumanResourcesCRUD({ setPage }) {
  const [employees, setEmployees] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const addEmployee = () => {
    if (id && name && department) {
      const newEmployee = { id, name, department };
      setEmployees([...employees, newEmployee]);
      setId('');
      setName('');
      setDepartment('');
    }
  };

  return (
    <div className="crud">
      <h2>Employee Management</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addEmployee();
        }}
      >
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit">Agregar empleado</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Departmento</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
                transition: 'background-color 0.3s',
                marginTop: '20px', // Espacio adicional arriba
                display: 'block', // Asegura que se comporta como un bloque para los saltos de línea
                marginLeft: 'auto', // Centra el botón horizontalmente
                marginRight: 'auto' // Centra el botón horizontalmente
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#357abd'} // Hover
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4a90e2'} // Hover out
            >
            Volver a Inicio
        </button>
    </div>
    
  );
}

export default HumanResourcesCRUD;