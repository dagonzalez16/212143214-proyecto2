import React, { useState } from 'react';

function LaptopCRUD({ setPage }) {
  const [laptops, setLaptops] = useState([]);
  const [employeeName, setEmployeeName] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [newLaptopModel, setNewLaptopModel] = useState('');
  const [newLaptopBrand, setNewLaptopBrand] = useState('');

  // Agregar una nueva laptop
  const addLaptop = (e) => {
    e.preventDefault();
    if (newLaptopModel.trim() === '' || newLaptopBrand.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
    const newLaptop = {
      id: Date.now(), // Genera un ID único usando el timestamp actual
      model: newLaptopModel,
      brand: newLaptopBrand,
    };
    setLaptops([...laptops, newLaptop]);
    setNewLaptopModel('');
    setNewLaptopBrand('');
  };

  // Eliminar una laptop por ID
  const deleteLaptop = (id) => {
    setLaptops(laptops.filter(laptop => laptop.id !== id));
  };

  // Editar una laptop por ID
  const editLaptop = (id, updatedLaptop) => {
    setLaptops(
      laptops.map(laptop => (laptop.id === id ? { ...laptop, ...updatedLaptop } : laptop))
    );
  };

  // Generar carta responsiva
  const generateResponsibilityLetter = () => {
    if (employeeName.trim() === '') {
      alert('Por favor, ingrese el nombre del empleado.');
      return;
    }
    const letterContent = `
      [Nombre de la Empresa]
      Carta Responsiva

      Yo, ${employeeName}, me hago responsable de la recepción y uso del equipo de cómputo proporcionado por [Nombre de la Empresa].
      
      Me comprometo a utilizar el equipo de manera adecuada y a devolverlo en las condiciones que me fue entregado, conforme a las políticas de la empresa.
      
      Firma: ________________________
      Fecha: ________________________
    `;

    setGeneratedLetter(letterContent);
  };

  const handleInputChange = (e) => {
    setEmployeeName(e.target.value);
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

      <h2>Gestión de Laptops</h2>

      {/* Formulario de entrada para agregar nuevas laptops */}
      <form onSubmit={addLaptop} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Modelo de la laptop"
          value={newLaptopModel}
          onChange={(e) => setNewLaptopModel(e.target.value)}
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
          placeholder="Marca de la laptop"
          value={newLaptopBrand}
          onChange={(e) => setNewLaptopBrand(e.target.value)}
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
          Agregar Laptop
        </button>
      </form>

      {/* Formulario de entrada para el nombre del empleado */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          generateResponsibilityLetter();
        }}
      >
        <input
          type="text"
          placeholder="Ingrese el nombre del empleado"
          value={employeeName}
          onChange={handleInputChange}
          style={{
            marginRight: '10px',
            padding: '8px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '300px',
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
          Generar Carta Responsiva
        </button>
      </form>

      {/* Mostrar la carta generada */}
      {generatedLetter && (
        <div style={{ marginTop: '20px' }}>
          <h3>Carta Responsiva Generada</h3>
          <pre
            style={{
              backgroundColor: '#f1f1f1',
              padding: '15px',
              borderRadius: '5px',
              overflow: 'auto',
            }}
          >
            {generatedLetter}
          </pre>
          <button
            onClick={() => {
              const blob = new Blob([generatedLetter], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'carta_responsiva.txt';
              a.click();
              URL.revokeObjectURL(url);
            }}
            style={{
              backgroundColor: '#357abd',
              color: '#ffffff',
              border: 'none',
              padding: '8px 15px',
              fontSize: '1rem',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
              display: 'block',
            }}
          >
            Descargar Carta
          </button>
        </div>
      )}

      {/* Tabla de laptops */}
      <h3>Lista de Laptops</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {laptops.map((laptop) => (
            <tr key={laptop.id}>
              <td>{laptop.id}</td>
              <td>{laptop.model}</td>
              <td>{laptop.brand}</td>
              <td>
                <button
                  onClick={() => {
                    const updatedModel = prompt('Nuevo modelo:', laptop.model);
                    if (updatedModel) {
                      editLaptop(laptop.id, { model: updatedModel });
                    }
                  }}
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
                  onClick={() => deleteLaptop(laptop.id)}
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

export default LaptopCRUD;