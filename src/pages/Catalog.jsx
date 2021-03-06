import React from 'react';
import Layout from '../components/Layout';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalog } from '../store/actionCreators/catalogAC';
import CatalogItem from '../components/CatalogItem';
import Loader from '../components/Loader'
import { Search } from '../assets/icons';

const Catalog = () => {
   const [q, setQ] = useState('')
   const { items, isFetching } = useSelector(state => state.catalog)
   const dispatch = useDispatch();
   const params = useLocation();

   useEffect(() => {
      const category = new URLSearchParams(params.search).get('category')
      const query = new URLSearchParams(params.search).get('query')
      if (query) {
         setQ(query)
      }
      dispatch(fetchCatalog({ category, query }))

   }, [params.search])

   return (
      <Layout>
         <section className="">
            <div className="container py-3">
               <div className="uppercase text-lg font-light py-3">
                  Results
               </div>
               <div className="flex flex-col gap-4">
                  {isFetching
                     ? <Loader />
                     : items.length > 0
                        ? items.map((item) => <CatalogItem {...item} key={item._id} />)
                        : <div className='text-gray-500 flex items-center justify-center'>
                           <Search className='text-3xl mr-2 text-gray-900' />
                           <div className="text-center text-2xl ">
                              No results for
                              <span className='font-semibold text-gray-900'> "{q}"</span>
                           </div>
                        </div>}
               </div>
            </div>
         </section>
      </Layout>
   );
};

export default Catalog;
