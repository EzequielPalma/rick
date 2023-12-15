import React, { useState, useEffect } from 'react';

const MiComponente = ({pagina}) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Hacer el fetch en el useEffect

    let url = 'https://rickandmortyapi.com/api/character';
    if (pagina !== "0") {
      url += `?page=${pagina}`; // Corregí 'page' en lugar de 'page='
    }
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Hacer algo con los datos, por ejemplo, actualizar el estado
        setDatos(data.results);
        console.log(pagina)
      })
      .catch(error => console.error('Error al obtener los datos:', error));
}, [pagina]); // El segundo argumento [] significa que useEffect se ejecutará solo después del montaje inicial

  return (
    <div className='allCards'>
      {datos.map(item => (
        <div key={item.id} className="card" style={{ width: '18rem' }}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.status} {item.species}</p>
            <p className="card-text">{item.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default MiComponente;
