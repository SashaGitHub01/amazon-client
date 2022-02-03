import React from 'react';
import { Routes, Route } from 'react-router';
import Catalog from '../../pages/Catalog';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Item from '../../pages/Item';
import Cart from '../../pages/Cart';
import SuccessPay from '../../pages/SuccessPay';
import CanceledPay from '../../pages/CanceledPay';
import Orders from '../../pages/Orders';

const AppRouter = () => {
   return (
      <Routes>
         <Route element={<Home />} path='/' />
         <Route element={<Login />} path='/login' />
         <Route element={<Catalog />} path='/catalog' />
         <Route element={<Item />} path='/item/:id' />
         <Route element={<Cart />} path='/cart' />
         <Route element={<Orders />} path='/orders' />
         <Route element={<SuccessPay />} path='/pay/success' />
         <Route element={<CanceledPay />} path='/pay/canceled' />
      </Routes>
   );
};

export default AppRouter;
