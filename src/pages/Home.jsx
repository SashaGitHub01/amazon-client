import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Banner from "../components/Banner"
import CategoryItem from "../components/CategoryItem"
import Layout from '../components/Layout'
import { fetchCategories } from "../store/actionCreators/categoriesAC"

export default function Home() {
   const { categories, isFetching } = useSelector(state => state.categories)
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchCategories())
   }, [])

   return (
      <Layout>
         <div className="bg-gray-200 flex-auto">
            <Banner />
            <section className="container pt-5 md:pt-0 md:translate-y-[-20vh]">
               <div className="flex-col flex items-center md:items-stretch">
                  <div className={`grid xl:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-7 relative z-10
                   max-w-[380px] md:max-w-full`}>
                     {categories
                        && categories.map((item) => <CategoryItem {...item} key={item._id} />)}
                  </div>
               </div>
            </section>
         </div>
      </Layout>
   )
}
