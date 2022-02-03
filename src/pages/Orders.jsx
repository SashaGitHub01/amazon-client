import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import OrderItem from '../components/OrderItem';

const Orders = () => {
   const { orders } = useSelector(state => state.user)

   return <Layout>
      <div className="bg-gray-100 flex-auto py-5">
         <div className="container">
            <div className="bg-white px-5 py-4">
               <div className="border-solid border-b border-yellow-400 pb-3">
                  <h4 className="text-[2rem]">
                     Your Orders
                  </h4>
               </div>
               <div className="py-2">
                  <div className="">
                     <span className="leading-9 text-md">
                        {orders.length} Orders
                     </span>
                  </div>
                  <div className="flex flex-col gap-6">
                     {orders
                        && orders.map((item) => <OrderItem {...item} key={item._id} />)}
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Layout>;
};

export default Orders;
