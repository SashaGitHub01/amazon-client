import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
   return <div className='flex-auto flex flex-col'>
      <Header />
      <main className="flex-auto flex flex-col">
         {children}
      </main>
   </div>;
};

export default Layout
