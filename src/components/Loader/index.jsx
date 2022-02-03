import React from "react"

const Loader = () => {
   return (
      <div className="relative inline-block w-[60px] h-[60px] self-center">
         <div className={`absolute w-[54px] h-[54px] rounded-[50%] border-[6px] border-solid
          m-[6px] animate-load  border-transparent border-t-yellow-400 delay-[-0,4s]`}></div>
         <div className={`absolute w-[54px] h-[54px] rounded-[50%] border-[6px] border-solid
          m-[6px] animate-load  border-transparent border-t-yellow-400 delay-[-0,35s]`}></div>
         <div className={`absolute w-[54px] h-[54px] rounded-[50%] border-[6px] border-solid
          m-[6px] animate-load  border-transparent border-t-yellow-400 delay-[-0,3s]`}></div>
         <div className={`absolute w-[54px] h-[54px] rounded-[50%] border-[6px] border-solid
          m-[6px] animate-load  border-transparent border-t-yellow-400`}></div>
      </div>
   )
}

export default Loader