import React, { useState } from 'react';
import MiComponente from './ApiRick';
import './filtros.css';

function FiltradorBuscador() {
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState('1'); // Página por defecto es la 1

  const handleNameChange = (e) => {
    const selectedName = e.target.value;
    setNameFilter(selectedName);
  };

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setStatusFilter(selectedStatus);
  };

  const handlePageChange = (e) => {
    const selectedPage = e.target.value;
    setCurrentPage(selectedPage);
  };

  const decrementPage = () => {
    const newPage = parseInt(currentPage, 10) - 1;
    if (newPage >= 1) {
      setCurrentPage(newPage.toString());
    }
  };

  const incrementPage = () => {
    const newPage = parseInt(currentPage, 10) + 1;
    setCurrentPage(newPage.toString());
  };


  return (
    <div id="conjuntosFiltrados">
      <input
        name="name-filter"
        id="name-filter"
        type="text"
        placeholder="Busca a tu personaje!"
        value={nameFilter}
        onChange={handleNameChange}
      />

      <select
        name="status-filter"
        id="status-filter"
        value={statusFilter}
        onChange={handleStatusChange}
      >
        <option value="">Filtrar por estado</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>

      <select
        name="pagina2"
        id="pagina2"
        value={currentPage}
        onChange={handlePageChange}
      >
        <option value="0">Accede a otras páginas!</option>
        {Array.from({ length: 42 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    
      <button onClick={decrementPage}>Anterior</button>
      <button onClick={incrementPage}>Siguiente</button>


      <MiComponente nameFilter={nameFilter} statusFilter={statusFilter} currentPage={currentPage} />
    </div>
  );
}

export default FiltradorBuscador;
