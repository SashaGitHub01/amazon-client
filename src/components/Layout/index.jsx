import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
   return <div className='flex-auto flex flex-col'>
      <Header />
      <main className="flex-auto flex flex-col">
         {children}
      </main>
      <footer className="pb-3 pt-2 bg-dark_gray">
         <div className="text-center">
            <h3 className='text-white leading-7'>
               © 1995-2022, Amazonje.com.
            </h3>
            <a href="https://github.com/SashaGitHub01" target={'_blank'}>
               <h2 className='text-text_blue underline text-md'>
                  SashaGitHub01
               </h2>
            </a>
         </div>
      </footer>
   </div>;
};

export default Layout
