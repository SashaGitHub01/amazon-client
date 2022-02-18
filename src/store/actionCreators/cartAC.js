import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CartService } from '../../API/CartItemsService'

export const setItems = createAction('cart/setItems')
export const setTotalItems = createAction('cart/setTotalItems')
export const setTotalPrice = createAction('cart/setTotalPrice')
export const clearCart = createAction('cart/clearCart')

export const fetchCart = createAsyncThunk(
   'cart/fetchCart',
   async (_, thunk) => {
      try {
         const res = await CartService.getCart();

         thunk.dispatch(setItems(res.items))
         thunk.dispatch(setTotalItems(res.totalItems))
         thunk.dispatch(setTotalPrice(res.totalPrice))

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Error')
      }
   }
)

export const addToCart = createAsyncThunk(
   'cart/addToCart',
   async (id, thunk) => {
      try {
         const res = await CartService.createItem(id);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Error')
      }
   }
)

export const removeFromCart = createAsyncThunk(
   'cart/removeFromCart',
   async (id, thunk) => {
      try {
         const res = await CartService.deleteItem(id);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Error')
      }
   }
)

export const subItem = createAsyncThunk(
   'cart/subItem',
   async (id, thunk) => {
      try {
         const res = await CartService.subItem(id);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Error')
      }
   }
)

export const addItem = createAsyncThunk(
   'cart/addItem',
   async (id, thunk) => {
      try {
         const res = await CartService.addItem(id);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Error')
      }
   }
)