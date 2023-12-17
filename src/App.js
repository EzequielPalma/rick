// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MiComponente from './ApiRick';
import PaginaOpiniones from './PaginaOpiniones';
import PaginacionRick from './Paginacion';
import FiltradorBuscador from './FiltradorBuscador';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <PaginacionRick /><FiltradorBuscador />
              
              <MiComponente />
            </Layout>
          }
        />
        <Route
          path="/PaginaOpiniones"
          element={
            <Layout>
              <PaginaOpiniones />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
