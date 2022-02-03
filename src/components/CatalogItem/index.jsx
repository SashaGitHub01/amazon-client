import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStars } from '../../utils/getStars';
import { Star, StarFilled, StarHalf } from '../../assets/icons';

const CatalogItem = ({ image, title, rating, price, _id }) => {
   const [stars, setStars] = useState([]);

   useEffect(() => {
      if (rating) {
         const stars = getStars(rating.totalRate);
         const result = stars.map((num, i) => {
            if (num === 1) return <StarFilled key={i} data-value={i + 1} />
            if (num === 0.5) return <StarHalf key={i} data-value={i + 1} />

            return <Star key={i} data-value={i + 1} />
         })

         setStars(result)
      }
   }, [rating])

   return (
      <div className='border-solid border border-gray-300 rounded min-h-[200px] flex flex-col'>
         <div className="flex-auto flex">
            <div className="relative flex-col flex justify-center border-r border-solid border-gray-300">
               <div className="w-[140px] md:w-[200px] p-4 self-center">
                  <img src={image} alt="title" />
               </div>
            </div>
            <div className="p-4">
               <div className="">
                  <Link to={`/item/${_id}`}>
                     <span className="font-medium text-lg cursor-pointer hover:text-orange-300 line-clamp-2">
                        {title}
                     </span>
                  </Link>
               </div>
               <div className="flex items-center py-3 gap-1">
                  <div className="flex items-center text-orange-400 text-lg">
                     {stars.map(Star => Star)}
                  </div>
                  <div className="text-main text-text_blue">
                     {rating.count}
                  </div>
               </div>
               <div className="flex items-start gap-[2px]">
                  <div className="text-tn">
                     $
                  </div>
                  <div className="text-md">
                     {price}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CatalogItem;
