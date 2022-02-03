import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ image, title, _id }) => {
   return (
      <div className='p-5 bg-white flex flex-col items-center'>
         <div className="w-full flex flex-col flex-auto">
            <h2 className="font-semibold text-[1.5rem]">
               {title}
            </h2>
            <div className="flex-auto">
               <div
                  style={{ backgroundImage: `url(${image})` }}
                  className={`self-center my-4 h-[200px] w-full
                  bg-no-repeat bg-center bg-cover`}
               >
               </div>
            </div>
            <div className="justify-self-end">
               <Link className="text-sm text-text_blue" to={`catalog?category=${_id}`}>
                  See more
               </Link>
            </div>
         </div>
      </div>
   );
};

export default CategoryItem;
