import React from 'react';
import Footer from '../Footer';
import Header from './Header';

const Layout = ({Children}) => {
  return (
    <>
    <Header/>
    <div>{Children}</div>
    <Footer/>
    </>
  );
}

export default Layout;