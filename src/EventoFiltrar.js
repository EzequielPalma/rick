import MiComponente from './ApiRick';
function EventoFiltrar() {
    const statusFilterEl = document.getElementById("status-filter");
  
    if (statusFilterEl) {
      statusFilterEl.addEventListener('change', () => {
        MiComponente(statusFilterEl.value);
      });
    }
  }
  
  export default EventoFiltrar;
  