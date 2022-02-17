import React from 'react';
import { useState } from 'react';
import { Cancel, UserIcon } from '../../assets/icons';

const Nav = ({ user }) => {
   const [aside, setAside] = useState(false)

   const handleOpen = () => {
      setAside(true)
      document.body.classList.add('overflow-hidden')
   }

   const handleClose = () => {
      setAside(false)
      document.body.classList.remove('overflow-hidden')
   }

   return <nav className='bg-dark_gray px-4 py-2 relative'>
      <div className={`fixed left-0 top-0  w-full h-full z-50 ${aside ? '' : 'hidden'}`}>
         <div className="w-[60%] h-screen bg-white flex flex-col">
            <div className="p-3 bg-dark_gray">
               <div className="flex items-center">
                  <div
                     className="text-xl text-white rounded-[50%] border-white p-1 border-2 border-solid mr-2"
                  >
                     <UserIcon />
                  </div>
                  <div className="text-white text-md">
                     Hello, {user ? user.username : 'Sign In'}
                  </div>
               </div>
            </div>
            <ul className='flex flex-col flex-auto'>
               <li
                  className={`py-2 px-2 text-black cursor-pointer
            hover:outline hover:outline-1 outline-white`}
               >
                  <span className="text-sm">
                     Today's Deals
                  </span>
               </li>
               <li
                  className={`py-2 px-2 text-black cursor-pointer
            hover:outline hover:outline-1 outline-white`}
               >
                  <span className="text-sm">
                     Customers Service
                  </span>
               </li>
               <li
                  className={`py-2 px-2 text-black cursor-pointer
            hover:outline hover:outline-1 outline-white`}
               >
                  <span className="text-sm">
                     Registry
                  </span>
               </li>
               <li
                  className={`py-2 px-2 text-black cursor-pointer
            hover:outline hover:outline-1 outline-white`}
               >
                  <span className="text-sm">
                     Gifts
                  </span>
               </li>
            </ul>
            <footer className='bg-gray-100 py-2 text-center'>
               <h2 className='text-tn font-semibold'>
                  Amazon 1995-2022
               </h2>
            </footer>
         </div>
         <div
            className="bg-black opacity-70 left-0 top-0 w-full h-full absolute -z-10"
            onClick={handleClose}
         >
            <div className="text-white text-5xl absolute right-3 top-7">
               <Cancel />
            </div>
         </div>
      </div>
      <div className="flex items-center justify-between">
         <li
            onClick={handleOpen}
            className={`md:hidden flex items-center py-2 px-2 text-white cursor-pointer
               hover:outline hover:outline-1 outline-white`}
         >
            <div
               className={`relative h-[14px] w-[22px] border-b-2 border-t-2 border-white
               border-solid flex items-center mr-2`}
            >
               <div className="w-full h-[2px] bg-white"></div>
            </div>
            <span className="text-sm font-semibold">
               All
            </span>
         </li>
         <ul className='hidden md:flex items-center'>
            <li
               className={`py-2 px-2 text-white cursor-pointer
               hover:outline hover:outline-1 outline-white`}
            >
               <span className="text-sm">
                  Today's Deals
               </span>
            </li>
            <li
               className={`py-2 px-2 text-white cursor-pointer
               hover:outline hover:outline-1 outline-white`}
            >
               <span className="text-sm">
                  Customers Service
               </span>
            </li>
            <li
               className={`py-2 px-2 text-white cursor-pointer
               hover:outline hover:outline-1 outline-white`}
            >
               <span className="text-sm">
                  Registry
               </span>
            </li>
            <li
               className={`py-2 px-2 text-white cursor-pointer
               hover:outline hover:outline-1 outline-white`}
            >
               <span className="text-sm">
                  Gifts
               </span>
            </li>
         </ul>
         <div className="text-white  opacity-50 hover:opacity-100">
            <span className="">Github - </span>
            <a
               className="font-semibold text-orange-400 hover:text-orange-300"
               href='https://github.com/SashaGitHub01'
               target='_blank'
            >
               SashaGitHub01
            </a>
         </div>
      </div>
   </nav>;
};

export default Nav;
