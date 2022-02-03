import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';

const CartList = () => {
   const {
      totalItems, totalPrice, items, isCartProcessing
   } = useSelector(state => state.cart);

   return (
      <div className="">
         <div className=''>
            <div className="pb-2">
               <span className="text-[2rem]">
                  Shopping Cart
               </span>
            </div>
            <div className="l">
               <div className="text-right text-sm text-text_secondary leading-6">
                  Price
               </div>
               <div className="border-solid border-t border-gray-300">
                  {items.length
                     && items.map((item) => <CartItem {...item} key={item._id} isCartProcessing={isCartProcessing} />)}
               </div>
               <div className="text-right text leading-6">
                  <span className="mr-1">
                     Subtotal ({totalItems} items):
                  </span>
                  <span className="font-semibold">
                     ${totalPrice}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartList;
