import React, { useState } from 'react';
import MiComponente from './ApiRick';

function PaginacionRick() {
  const [pagina, setPagina] = useState("1");

  const handleChange = (e) => {
    const selectedPagina = e.target.value;
    setPagina(selectedPagina);
  };

  return (
    <>
      <select
        name="pagina"
        id="pagina"
        className="form-select"
        aria-label="Default select example"
        onChange={handleChange}
        value={pagina}
      >
        <option value="0">Accede a otras páginas!</option>
        {Array.from({ length: 42 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>

      <MiComponente pagina={pagina} />
    </>
  );
}

export default PaginacionRick;
