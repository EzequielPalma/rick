import React, { useEffect, useState } from 'react';

const ResenasComponent = () => {
  const [resenas, setResenas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/jsonResenas.json");
        const data = await response.json();
        setResenas(data.reseñas);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="contenedorReseñas">
      {resenas.map((item, index) => (
        <div key={index} className="tarjeta">
          <h4>{item.usuario}</h4>
          <hr></hr>
          <h5>{item.comentario}</h5>
          <hr></hr>
          <p>La puntuación es <strong>{item.puntuacion}/10</strong></p>
        </div>
      ))}
    </div>
  );
};

export default ResenasComponent;
