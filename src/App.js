// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import MiComponente from './ApiRick';
import PaginaOpiniones from './PaginaOpiniones';
import FiltradorBuscador from './FiltradorBuscador';
import ScrollToTopButton from './ScrollToTopButton';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <FiltradorBuscador />              
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
