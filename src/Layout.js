// Layout.js
import React from 'react';
import HeaderRick from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <>
    <HeaderRick />
    <main>{children}</main>
   
  </>
);

export default Layout;
