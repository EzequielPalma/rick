import React, { useState, useEffect } from 'react';

const MiComponente = ({ pagina, nameFilter, statusFilter, currentPage }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character";

    if (pagina == "0") {
      url = "https://rickandmortyapi.com/api/character";
    }  
   
    if (currentPage) {
      url = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${nameFilter}&status=${statusFilter}`;

    }    

    else {
      url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Actualizar el estado solo si se obtienen nuevos datos
        setDatos(data.results);

        const divRes = document.querySelector("#resultado");
        divRes.innerHTML = "";
        data.results.forEach(item => {
          const divItem = document.createElement("div");
          divItem.innerHTML =
            `
              <div class="card" style="width: 18rem;">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">${item.status} ${item.species}</p>
                  <p class="card-text">${item.gender}</p>  
                </div>
              </div>
            `;

          divRes.appendChild(divItem);
        });
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }, [pagina, nameFilter, statusFilter, currentPage]);

  return (
    <div id="resultado" className='allCards'></div>
  );
};

export default MiComponente;
