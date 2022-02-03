import React from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

const Popover = ({ children, onClose, target }) => {
   const [coords, setCoords] = useState(null)
   const ref = useRef(null)

   useEffect(() => {
      if (target) {
         const coords = {
            left: target.offsetLeft + target.offsetWidth / 2,
            top: target.offsetTop - window.pageYOffset + target.offsetHeight / 2,
         }

         setCoords(coords);
      }
   }, [target])

   useEffect(() => {
      if (ref.current && coords) {
         ref.current.addEventListener('mouseleave', handleLeave)
      }

   }, [ref.current, coords])

   const handleLeave = () => {
      onClose()
   }

   return (
      <>
         {coords
            && <div className="z-20 fixed top-0 left-0 w-full h-[100%] bg-[#2929297a]">
               <div
                  style={{ left: `${coords.left}px`, top: `${coords.top + 20}px` }}
                  ref={ref}
                  className={`bg-white py-3 px-4 absolute min-w-[170px] z-10 rounded-sm translate-x-[-100%]`}
               >
                  <div
                     className={`absolute border-solid border-t-0 border-[12px] border-t-transparent
                           border-r-transparent border-b-white border-l-transparent
                             translate-x-[-50%] translate-y-[-98%] top-0 right-0`}
                  />
                  <div className="absolute bottom-0 w-full h-7 left-0 translate-y-[98%]"></div>
                  <div className="absolute top-0 w-full h-6 left-0 translate-y-[-98%]"></div>
                  <div className="absolute top-0 h-screen w-7 left-0 translate-x-[-98%] translate-y-[-50%]"></div>
                  <div className="absolute top-0 h-screen w-7 right-0 translate-x-[98%] translate-y-[-50%]"></div>
                  {children}
               </div>
            </div>}
      </>
   );
};

export default Popover;
