import React from 'react';

const Input = ({ title, type, name, onChange, value, ...props }) => {
   return (
      <div className="w-full">
         <div className="font-semibold text-sm leading-6">
            {title}
         </div>
         <input
            {...props}
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            className={`rounded-sm border-[1px] border-gray-400 border-solid text-sm 
            py-2 px-[0.315rem] focus:border-orange-200 focus:shadow-shadow_btn w-full`}
         />
      </div>
   );
};

export default Input;
