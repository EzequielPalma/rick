// CardWithModal.js
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import StaticExample from './Modal'; // Asegúrate de ajustar la ruta correcta

function CardWithModal({ item }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  return (
    <>
      <div className="card" onClick={handleShowModal}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.status} {item.species}</p>
          <p className="card-text">{item.gender}</p>
        </div>
      </div>

      {/* Renderizar el modal si showModal es true */}
      {showModal && <StaticExample item={item} onHide={handleHideModal} />}
    </>
  );
}

export default CardWithModal;
