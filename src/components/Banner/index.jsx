import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
   return <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
   >
      <div className='relative'>
         <img
            src="https://res.cloudinary.com/twitter-uploads/image/upload/v1643218523/amazon/711Y9Al9RNL._SX3000__jnak1w.jpg"
            alt=""
         />
         <div className='w-full absolute bottom-0 bg-gradient-to-t from-gray-200 h-[50%]' />
      </div>
      <div>
         <img
            src="https://res.cloudinary.com/twitter-uploads/image/upload/v1643218521/amazon/71qid7QFWJL._SX3000__ojurmy.jpg"
            alt=""
         />
      </div>
      <div>
         <img
            src="https://res.cloudinary.com/twitter-uploads/image/upload/v1643218521/amazon/61DUO0NqyyL._SX3000__nvmulr.jpg"
            alt=""
         />
      </div>
   </Carousel>;
};

export default Banner;
