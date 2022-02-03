import React from 'react';
import { useNavigate } from 'react-router';
import { Cancel } from '../assets/icons';
import Button from '../components/Button';
import Layout from '../components/Layout';

const CanceledPay = () => {
   const nav = useNavigate()

   const navoToOrders = () => {
      nav('/orders')
   }

   return <Layout>
      <div className='bg-gray-100 flex-auto'>
         <div className="bg-white px-4 py-6 flex flex-col items-center">
            <div className=" flex items-center">
               <div className="rounded-[50%] bg-red-500 flex p-1 items-center justify-center text-[2rem] mr-3">
                  <Cancel color='#fff' />
               </div>
               <p className="font-semibold text-center text-xl text-gray-800">
                  Sorry, your order has been canceled.
               </p>
            </div>
            <div className="pt-7">
               <Button onClick={navoToOrders}>
                  Go to my orders
               </Button>
            </div>
         </div>
      </div>
   </Layout>;
};

export default CanceledPay;
