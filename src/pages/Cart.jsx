import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';
import EmptyCart from '../components/EmptyCart';
import Layout from '../components/Layout';
import Loader from '../components/Loader'
import { loadStripe } from '@stripe/stripe-js'
import { StripeService } from '../API/StripeService';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC)

const Cart = () => {
   const { items, isFetching, totalItems, totalPrice } = useSelector(state => state.cart)

   const createCheckout = async () => {
      const stripe = await stripePromise;
      const res = await StripeService.createSession(items);

      const result = await stripe.redirectToCheckout({
         sessionId: res.id
      })

      if (result.error) console.log(result.error.message);
   }

   return (
      <Layout>
         <div className='bg-gray-100 flex-auto py-6'>
            <div className="container">
               <div className="flex flex-col gap-5 lg:flex-row">
                  <div className={`bg-white py-3 px-5 ${isFetching ? 'flex justify-center' : ''} flex-auto`}>
                     {isFetching
                        ? <Loader />
                        : items.length > 0
                           ? <CartList />
                           : <EmptyCart />}
                  </div>
                  <div className="lg:max-w-[220px] w-full">
                     <div className="bg-white p-4">
                        <div className="">
                           <span className="mr-1">
                              Subtotal ({totalItems} items):
                           </span>
                           <span className="font-semibold">
                              ${totalPrice}
                           </span>
                        </div>
                        <div className="py-4">
                           <div
                              onClick={createCheckout}
                              className={`bg-yellow-300 py-2 px-2 text-center rounded-md shadow-md 
                              hover:bg-yellow-400 cursor-pointer 
                              ${!items.length && 'pointer-events-none opacity-40'}`}
                           >
                              <span className='text-sm'>
                                 Proceed to checkout
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Cart;
