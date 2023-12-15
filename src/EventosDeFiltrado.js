import React from 'react';
import EventoBuscador from './EventoBuscador';
import EventoFiltrar from './EventoFiltrar';

function EventosDeFiltrado() {
  EventoBuscador();
  EventoFiltrar();

  return null; // No necesitas retornar JSX aquí
}

export default EventosDeFiltrado;