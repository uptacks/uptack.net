import React from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Banner />
    </div>
  );
};

export default BaseLayout;
