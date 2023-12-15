import './App.css';
import MiComponente from './ApiRick.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderRick from './Header.js';
import PaginacionRick from './Paginacion.js';
import Buscador from './BuscadorFiltrado.js';



function App() {
  return (
    <>
      <HeaderRick/>
      

      

        <main>
          <Buscador/>
          <PaginacionRick/>
          <MiComponente/>
        </main>
        
      
    </>
  );
}

export default App;
