import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Tooltip } from 'antd';
import Layout from '../components/Layout';
import { fetchItem } from '../store/actionCreators/itemAC';
import { Back } from '../assets/icons';
import { getStars } from '../utils/getStars';
import { Link } from 'react-router-dom';
import { getInterval } from '../utils/getInterval';
import { addToCart } from '../store/actionCreators/cartAC';
import { Star, StarFilled, StarHalf } from '../assets/icons';
import Rating from '../components/Rating';

const Item = () => {
   const dispatch = useDispatch()
   const nav = useNavigate();
   const params = useParams();
   const [isRated, setIsRated] = useState(false)
   const [stars, setStars] = useState([]);
   const [interval, setInterval] = useState({});

   const { rates, isAuth } = useSelector(state => state.user)
   const { rating, isFetching, item } = useSelector(state => state.item)

   const backToPrev = () => {
      nav(-1)
   }

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

   useEffect(() => {
      if (rates && item) {
         const isExist = rates.find(rate => rate.item === item._id)

         if (isExist) {
            setIsRated(true)
         } else {
            setIsRated(false)
         }
      }
   }, [rates, item])

   useEffect(() => {
      if (item) {
         const int = getInterval();
         setInterval(int)
      }
   }, [item])

   useEffect(() => {
      if (params.id) {
         dispatch(fetchItem(params.id))
      }
   }, [params])

   const handleAddToCart = () => {
      dispatch(addToCart(item?._id))
   }

   return (
      <Layout>
         {item && !isFetching
            ? <div className='py-4 px-5'>
               <div
                  className="flex items-center text-gray-600 cursor-pointer gap-1"
                  onClick={backToPrev}
               >
                  <Back />
                  <span className="text-tn">
                     Back to catalog
                  </span>
               </div>
               <div className="">
                  <div className="flex flex-col justify-center lg:flex-row py-6 gap-5">
                     <div className="flex justify-center lg:block lg:min-w-[190px]">
                        <img src={item.image} alt="img" />
                     </div>
                     <div className="flex-auto">
                        <div className="border-solid border-gray-300 border-b">
                           <div className="text-xl">
                              {item.title}
                           </div>
                           {stars.length > 0        //STARS
                              && <Rating
                                 isAuth={isAuth}
                                 stars={stars}
                                 count={rating.count}
                                 item={item}
                                 isRated={isRated}
                                 setIsRated={setIsRated}
                              />}
                           <div className="">
                              <p className='leading-6'>
                                 {item.description}
                              </p>
                           </div>
                           <div className="flex items-center text-sm gap-1 py-2">
                              <span className="font-semibold">
                                 Category:
                              </span>
                              <Link to={`/catalog?category=${item.category._id}`} className="text-text_blue">
                                 {item.category.title}
                              </Link>
                           </div>
                        </div>
                        <div className="py-3">
                           <div className="flex items-center gap-2">
                              <span className="text-text_secondary text-sm">
                                 Price:
                              </span>
                              <div className="text-orange-400 text-md font-light">
                                 ${item.price}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div
                        className={`rounded-md border-solid border border-gray-400 py-5 px-3
                     min-w-[150px] lg:max-w-[250px] w-full`}
                     >
                        <div className="">
                           <div className="text-orange-400 text-md font-light pb-3">
                              ${item.price}
                           </div>
                           <div className="text-sm leading-5 text-text_secondary">
                              <span className="">
                                 Delivery
                              </span>
                              <span className='font-semibold px-1'>
                                 {interval.start} - {interval.end}
                              </span>
                           </div>
                           <div className="py-3">
                              <span className="text-green-500 text-md font-light">
                                 In Stock
                              </span>
                           </div>
                           <div className="flex lg:flex-col gap-2 items-center w-full py-2">
                              <div
                                 onClick={handleAddToCart}
                                 className={`bg-yellow-300 rounded-full w-full text-center py-3 px-4 
                                 cursor-pointer hover:bg-yellow-400 shadow`}
                              >
                                 <span className="">
                                    Add to cart
                                 </span>
                              </div>
                              <div
                                 className={`bg-yellow-500 rounded-full w-full text-center py-3 px-4 
                                 cursor-pointer hover:bg-yellow-600 shadow`}
                              >
                                 <span className="">
                                    Buy now
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            : null}
      </Layout>
   );
};

export default Item;
