import React from 'react';
import Footer from './Footer';
import Navigation from './navigation';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo-fav.png" />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
