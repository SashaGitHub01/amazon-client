import React from 'react';

const Button = ({ children, variant, ...props }) => {
   return (
      <button
         {...props}
         className={`min-h-[30px] rounded-sm border-[1px] 
         border-solid border-gray-500 px-4 w-full bg-gradient-to-b 
         disabled:pointer-events-none disabled:opacity-40
         ${variant === 'secondary'
               ? 'bg-btn_secondary hover:from-gray-300'
               : 'hover:from-orange-300 bg-btn_primary from-btn_orange to-btn_yellow focus:shadow-shadow_btn'}`}
      >
         <span className="text-main">
            {children}
         </span>
      </button>
   );
};

export default Button;
