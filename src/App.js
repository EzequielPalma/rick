import './App.css';
import MiComponente from './ApiRick.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderRick from './Header.js';
import PaginacionRick from './Paginacion.js';



function App() {
  return (
    <>
      <HeaderRick/>
      

      

        <main>
          <PaginacionRick/>
          <MiComponente/>
        </main>
        
      
    </>
  );
}

export default App;
