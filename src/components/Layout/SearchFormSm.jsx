import React from 'react';
import { Search } from '../../assets/icons';
import { useFormik } from 'formik'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams'

const SearchFormSm = () => {
   const [searchParams, setSearchParams] = useCustomSearchParams();
   const loc = useLocation()
   const nav = useNavigate()

   const formik = useFormik({
      initialValues: {
         query: ''
      },

      onSubmit: (val) => {
         if (val.query === '') return;

         const inCatalog = loc.pathname.includes('catalog');

         if (inCatalog) {
            setSearchParams({ ...searchParams, query: val.query })
         } else {
            nav(`/catalog?query=${val.query}`)
         }
      }
   })

   return (
      <form
         onSubmit={formik.handleSubmit}
         className="lg:hidden flex items-stretch overflow-hidden rounded-sm flex-auto my-3 px-5"
      >
         <input
            name='query'
            value={formik.values.query}
            onChange={formik.handleChange}
            className='text-1 text-md leading-6 block px-2 w-full'
         />
         <button
            type='submit'
            className="bg-yellow-400 p-1 cursor-pointer hover:bg-yellow-600 text-dark_gray block"
         >
            <Search size={'1.75rem'} />
         </button>
      </form>
   );
};

export default SearchFormSm;
