import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import { useSelector } from 'react-redux';
import RegForm from '../components/Login/RegForm';
import { useEffect } from 'react';

const Login = () => {
   const nav = useNavigate()
   const [signin, setSignin] = useState(true);
   const [signup, setSignup] = useState(false);
   const { isSigning, signError, user } = useSelector(state => state.user)

   useEffect(() => {
      if (!!user) {
         nav('/')
      }
   }, [user])

   const openSignup = () => {
      setSignup(true)
      setSignin(false)
   }

   const openSignin = () => {
      setSignin(true)
      setSignup(false)
   }

   return (
      <div className='flex-auto'>
         <div className="flex flex-col items-center w-full">
            <div className="max-w-[350px] flex-col flex items-center w-full">
               <Link className="w-[120px] block" to={'/'}>
                  <img
                     src="https://res.cloudinary.com/twitter-uploads/image/upload/v1643467039/amazon/amazon_PNG21_befrdm.png"
                     alt="logo"
                  />
               </Link>
               <div className="rounded border-[1px] border-gray-400 border-solid py-4 px-7 w-full">
                  <div className="text-[1.75rem]">
                     {signin
                        ? 'Sign-In'
                        : 'Create account'}
                  </div>
                  {signin
                     ? <LoginForm error={signError} isSigning={isSigning} />
                     : signup
                        ? <RegForm error={signError} isSigning={isSigning} />
                        : null}
               </div>
               <div className="py-4 w-full">
                  <div className="relative text-center mb-5">
                     <div className="absolute top-[50%] translate-y-[50%] bg-gray-400 w-full h-[1px]">
                     </div>
                     <span className='text-tn text-gray-400 px-1 bg-white relative z-10'>
                        {signin
                           ? 'New to Amazon?'
                           : 'Already have an account?'}
                     </span>
                  </div>
                  {signin
                     ? <Button variant={'secondary'} onClick={openSignup}>
                        Create account
                     </Button>
                     : <Button variant={'secondary'} onClick={openSignin}>
                        Sign-In
                     </Button>}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
