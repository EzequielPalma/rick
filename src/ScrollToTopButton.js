import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importa el icono de flecha hacia arriba

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Muestra u oculta el botón según la posición del scroll
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animación de desplazamiento suave
    });
  };

  // Agrega un listener de scroll para actualizar la visibilidad del botón
  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
