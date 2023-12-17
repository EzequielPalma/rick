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
          <h5>{item.comentario}</h5>
          <p>{item.puntuacion}</p>
        </div>
      ))}
    </div>
  );
};

export default ResenasComponent;
