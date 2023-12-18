// Botonera.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

function BotoneraNav() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Link to="/">
        <Button variant="secondary">Personajes</Button>
      </Link>
      <Link to="/PaginaOpiniones">
        <Button variant="secondary">Reseñas de la serie</Button>
      </Link>
    </ButtonGroup>

    
  );
}

export default BotoneraNav;
