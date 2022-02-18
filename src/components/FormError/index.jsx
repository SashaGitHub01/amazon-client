import React from 'react'

const FormError = ({ errors = [] }) => {
   return (
      <>
         {errors.length > 0
            && <div className="rounded-md border-solid border border-red-600 py-4 bg-red-100">
               <ul className='flex flex-col gap-3 px-6'>
                  {errors.map((err) => (
                     <li className="text-sm list-disc text-red-500" key={err}>
                        {err}
                     </li>
                  ))}
               </ul>
            </div>}
      </>
   )
}

export default FormError