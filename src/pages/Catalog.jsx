import React from 'react';
import Layout from '../components/Layout';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalog } from '../store/actionCreators/catalogAC';
import CatalogItem from '../components/CatalogItem';
import Loader from '../components/Loader'

const Catalog = () => {
   const { items, isFetching } = useSelector(state => state.catalog)
   const dispatch = useDispatch();
   const params = useLocation();

   useEffect(() => {
      const category = new URLSearchParams(params.search).get('category')
      const query = new URLSearchParams(params.search).get('query')

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
                     : items
                        ? items.map((item) => <CatalogItem {...item} key={item._id} />)
                        : null}
               </div>
            </div>
         </section>
      </Layout>
   );
};

export default Catalog;
