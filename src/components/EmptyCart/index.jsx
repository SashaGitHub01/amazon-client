import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
   return (
      <div className='py-4 flex gap-5'>
         <div className="w-[280px]">
            <img
               src="https://res.cloudinary.com/twitter-uploads/image/upload/v1643709292/amazon/cart__esgokk.svg"
               alt=""
            />
         </div>
         <div className="">
            <div className="">
               <span className="font-semibold text-lg leading-8">
                  Your Amazon Cart is empty
               </span>
            </div>
            <Link to='/'>
               <span className="hover:underline hover:text-blue-500 leading-8 text-text_blue">
                  Go to the homepage
               </span>
            </Link>
         </div>
      </div>
   );
};

export default EmptyCart;
