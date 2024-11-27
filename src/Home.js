import React from 'react';

function Home({ setPage }) {
  const generateWelcomeLetter = () => {
    const letterContent = `
      Estimado empleado,

      Nos complace darte la bienvenida a G-Inventory. Estamos emocionados de contar contigo y esperamos que tu experiencia con nosotros sea productiva y enriquecedora.

      Atentamente,
      El equipo de G-Inventory
    `;
    
    const blob = new Blob([letterContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'carta_bienvenida.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="home">
      <h1>Bienvenido a G-Inventory!</h1>
      <p>Selecciona una opción:</p>
      <button onClick={() => setPage('laptopCRUD')}>Inventario de Laptops</button>
      <button onClick={() => setPage('humanResourcesCRUD')}>Lista de Empleados</button>
      <button onClick={() => setPage('hardwareLoanCRUD')}>Préstamos de Hardware</button>
      <button onClick={generateWelcomeLetter}>Generar Carta de Bienvenida</button> {/* Botón para generar la carta */}
    </div>
  );
}

export default Home;