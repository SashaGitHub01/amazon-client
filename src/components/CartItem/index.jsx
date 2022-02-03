import React from 'react';
import { useDispatch, } from 'react-redux';
import { removeFromCart, addItem, subItem } from '../../store/actionCreators/cartAC';

const CartItem = ({ _id, item, count, totalPrice, isCartProcessing }) => {
   const dispatch = useDispatch()

   const handleDelete = () => {
      dispatch(removeFromCart(_id))
   }

   const handleAdd = () => {
      dispatch(addItem(_id))
   }

   const handleSub = () => {
      dispatch(subItem(_id))
   }

   return (
      <div className='border-solid border-b border-gray-300 md:h-[200px] py-3'>
         <div className="flex flex-col justify-between gap-2 md:flex-row">
            <div className="flex gap-3 flex-auto flex-col md:flex-row">
               <div className="flex basis-[200px] min-w-[140px] lg:shrink-0 justify-center">
                  <div className="h-[180px] flex items-center">
                     <img src={item.image} alt="item" className='max-h-full' />
                  </div>
               </div>
               <div className="flex flex-col">
                  <div className="pb-3">
                     <h6 className="text-md font-semibold">
                        {item.title}
                     </h6>
                  </div>
                  <div className="">
                     <p className='line-clamp-2 leading-5'>
                        {item.description}
                     </p>
                  </div>
                  <div className="py-3 text-sm text-green-600">
                     In Stock
                  </div>
                  <ul
                     className={`flex items-center 
                   leading-4 ${isCartProcessing ? 'pointer-events-none opacity-40' : ''}`}
                  >
                     <li className="flex items-center gap-1 text-tn text-text_blue pr-3">
                        <span className="">
                           Quantity:
                        </span>
                        <div className="font-semibold">
                           {count}
                        </div>
                     </li>
                     <div className="h-full w-[1px] bg-gray-300" />
                     <li
                        onClick={handleDelete}
                        className="flex items-center gap-1 text-tn text-text_blue px-3 cursor-pointer"
                     >
                        <span className='hover:text-blue-400'>
                           Delete
                        </span>
                     </li>
                     <div className="h-full w-[1px] bg-gray-300" />
                     <li
                        onClick={handleAdd}
                        className="flex items-center gap-1 text-tn text-text_blue px-3 cursor-pointer"
                     >
                        <span className="hover:text-blue-400">
                           Increase
                        </span>
                     </li>
                     <div className="h-full w-[1px] bg-gray-300" />
                     <li
                        onClick={handleSub}
                        className="flex items-center gap-1 text-tn text-text_blue px-3 cursor-pointer"
                     >
                        <span className="hover:text-blue-400">
                           Decrease
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="basis-[15%] md:shrink-0">
               <div className="flex md:justify-end">
                  <span className="text-md font-semibold">
                     ${totalPrice}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartItem;
