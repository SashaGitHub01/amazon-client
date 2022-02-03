import React from 'react';
import { MenuBar } from '../../assets/icons';

const Nav = () => {
   return <nav className='bg-dark_gray px-4 py-2'>
      <ul className='flex items-center'>
         <li
            className={`flex items-center py-2 px-2 text-white cursor-pointer
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
   </nav>;
};

export default Nav;
