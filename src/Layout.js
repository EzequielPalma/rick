import React from 'react';
import HeaderRick from './Header';
import ScrollToTopButton from './ScrollToTopButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <>
    <HeaderRick />
    <main>
      {children}
      <ScrollToTopButton />
    </main>

  </>
);

export default Layout;
