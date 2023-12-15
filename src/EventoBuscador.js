import MiComponente from './ApiRick';


function EventoBuscador() {
    const nameFilterEl = document.getElementById("name-filter");
  
    if (nameFilterEl) {
      nameFilterEl.addEventListener("input", () => {
        MiComponente(nameFilterEl.value);
      });
    }
  }
  
  export default EventoBuscador;
  