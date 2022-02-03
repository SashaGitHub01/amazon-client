import React from 'react';
import { getOrderDate } from '../../utils/getOrderDate'

const OrderItem = ({ totalPrice, shippingPrice, items, images, createdAt, orderId }) => {
   return <div className='border-solid border border-slate-400 rounded-xl overflow-hidden'>
      <div className="flex p-4 bg-gray-100 items-center relative">
         <div className="flex items-center space-x-5 flex-auto">
            <div className="text-tn">
               <div className="uppercase font-semibold pb-1">
                  Order placed
               </div>
               <div className="">
                  {getOrderDate(new Date(createdAt))}
               </div>
            </div>
            <div className="text-tn">
               <div className="uppercase font-semibold pb-1">
                  TOtal price
               </div>
               <div className="">
                  ${totalPrice} - includes shipping (${shippingPrice})
               </div>
            </div>
         </div>
         <div className="max-w-[100px]">
            <div className="text-[10px] truncate absolute top-2 right-2 max-w-[20%] text-slate-600">
               ORDER # {orderId}
            </div>
            <div className="text-md">
               <span className="font-semibold text-orange-300">
                  {items.length} items
               </span>
            </div>
         </div>
      </div>
      <div className="p-4 bg-white">
         <div className="flex items-center overflow-auto space-x-5">
            {images && images.map(img => <img
               src={img}
               key={img}
               className='object-contain h-20 sm:h-32 max-w-[170px]'
            />)}
         </div>
      </div>
   </div>;
};

export default OrderItem;
