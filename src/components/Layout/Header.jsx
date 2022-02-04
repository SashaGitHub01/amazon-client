import React from 'react';
import { useState } from 'react';
import { Popover } from 'antd';
import { useEffect } from 'react';
import { fetchLogout } from '../../store/actionCreators/userAC'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Cart, Gift, Search, Triangle, UserIcon } from '../../assets/icons';
import Button from '../Button';
import Nav from './Nav';
import SearchForm from './SearchForm';
import SearchFormSm from './SearchFormSm';

const Header = () => {
   const dispatch = useDispatch()
   const [open, setIsOpen] = useState(false)
   const ref = useRef(null)
   const overRef = useRef(null)
   const nav = useNavigate()

   const { user, isAuth } = useSelector(state => state.user)
   const { totalItems } = useSelector(state => state.cart)

   useEffect(() => {
      if (overRef.current && !open) {
         overRef.current.addEventListener('mouseover', handleOver)
      }

      if (open) {
         overRef.current.removeEventListener('mouseover', handleOver)
      }

   }, [overRef.current, open])

   const handleOver = () => {
      handleOpen()
   }

   const logout = () => {
      dispatch(fetchLogout())
   }

   const navTo = () => {
      if (isAuth) {
         nav('/cart')
      } else {
         nav('/login')
      }
   }

   const handleClose = () => {
      setIsOpen(false)
   }

   const handleOpen = () => {
      setIsOpen(true)

   }

   const PopContent = () => {
      return (
         <>
            {isAuth
               ? <Button onClick={logout} variant={'secondary'}>
                  Logout
               </Button>
               : <Button onClick={navTo}>
                  Sign In
               </Button>}
            <div className="text-center pt-3">
               <span className="text-tn">
                  Welcome to Amazon!
               </span>
            </div>
         </>
      )
   }

   return <header className='bg-nav_black'>
      <div className="flex items-center justify-between lg:justify-start w-full  px-4 lg:py-3 pt-3">
         <Link className="max-w-[100px] cursor-pointer" to={'/'}>
            <img
               src="https://res.cloudinary.com/twitter-uploads/image/upload/v1643205412/amazon/2_dzve8d.png"
               alt="logo"
            />
         </Link>
         <SearchForm />
         <div className="flex items-center gap-4">
            <div className="flex items-end" ref={overRef}>
               <Popover
                  content={<PopContent />}
               >
                  <div className="text-white  truncate max-w-[140px]  cursor-pointer">
                     <div className="lg:block hidden">
                        <span className="text-tn font-light leading-4">
                           Hello, {user ? user.username : 'Sign In'}
                        </span>
                        <div className="font-semibold text-sm">
                           Accounts & Lists
                        </div>
                     </div>
                     <div className="text-white flex items-center gap-1 lg:hidden ">
                        <UserIcon className='text-2xl' />
                        <span className='sm:block hidden'>
                           {user ? user.username : 'Sign In'}
                        </span>
                     </div>
                  </div>
               </Popover>
               <div className="" ref={ref}>
                  <Triangle className='text-gray-300 ml-1' />
               </div>
            </div>
            <div className="flex items-end cursor-pointer">
               <Link className="text-white" to='/orders'>
                  <div className="lg:block hidden">
                     <span className="text-tn font-light leading-4">
                        Returns
                     </span>
                     <div className="font-semibold text-sm">
                        & Orders
                     </div>
                  </div>
                  <div className="flex gap-1 items-center text-white lg:hidden">
                     <Gift className='text-2xl' />
                     <span className="sm:block hidden">
                        Orders
                     </span>
                  </div>
               </Link>
               <Triangle className='text-gray-300 ml-1 lg:block hidden' />
            </div>
            <Link className="cursor-pointer relative" to='/cart'>
               {totalItems > 0
                  && <div
                     className={`rounded-[50%] bg-yellow-600 w-4 h-4 flex items-center
               justify-center absolute top-[-5px] right-[-5px]`}
                  >
                     <span className="text-tn text-white font-medium">
                        {totalItems}
                     </span>
                  </div>}
               <div className="text-[1.75rem] text-white">
                  <Cart />
               </div>
            </Link>
         </div>
      </div>
      <SearchFormSm />
      <Nav user={user} />
   </header>;
};

export default Header;
