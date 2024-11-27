import React, { useState } from 'react';
import Home from './Home';
import LaptopCRUD from './LaptopCRUD';
import HumanResourcesCRUD from './HumanResourcesCRUD';
import HardwareLoanCRUD from './HardwareLoanCRUD';
import './styles.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'laptopCRUD' && <LaptopCRUD setPage={setPage} />}
      {page === 'humanResourcesCRUD' && <HumanResourcesCRUD setPage={setPage} />}
      {page === 'hardwareLoanCRUD' && <HardwareLoanCRUD setPage={setPage} />} {}
    </div>
  );
}

export default App;