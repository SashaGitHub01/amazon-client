import { createSlice } from "@reduxjs/toolkit";
import {
   fetchCart, setItems, setTotalItems, setTotalPrice, addItem, subItem, addToCart, removeFromCart, clearCart
} from '../actionCreators/cartAC'
import { toFixedPrice } from '../../utils/toFixedPrice'

const initialState = {
   cart: null,
   isFetching: false,
   items: [],
   totalItems: 0,
   totalPrice: 0,
   error: null,
   isCartProcessing: false,
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   extraReducers: {
      //get cart
      [fetchCart.fulfilled.type]: (state, action) => {
         state.cart = action.payload;
         state.isFetching = false;
         state.error = null
      },

      [fetchCart.rejected.type]: (state, action) => {
         state.cart = null;
         state.isFetching = false;
         state.error = action.payload;
         state.items = [];
         state.totalItems = 0;
         state.totalPrice = 0;
      },

      [fetchCart.pending.type]: (state, action) => {
         state.isFetching = true
      },

      //add new item to cart
      [addToCart.fulfilled.type]: (state, action) => {
         state.totalItems += 1;
         state.totalPrice = toFixedPrice(Number(state.totalPrice) + Number(action.payload.item?.price));
         state.items.push(action.payload)
         state.isCartProcessing = false;
      },

      [addToCart.pending.type]: (state, action) => {
         state.isCartProcessing = true;
      },

      [addToCart.rejected.type]: (state, action) => {
         state.isCartProcessing = false;
      },

      //remove item from cart
      [removeFromCart.fulfilled.type]: (state, action) => {
         state.items = state.items.filter(item => item._id != action.payload?._id);
         state.totalPrice = toFixedPrice(Number(state.totalPrice) - Number(action.payload.totalPrice))
         state.totalItems -= action.payload.count;
         state.isCartProcessing = false;
      },

      [removeFromCart.pending.type]: (state, action) => {
         state.isCartProcessing = true
      },

      [removeFromCart.rejected.type]: (state, action) => {
         state.isCartProcessing = false
      },


      //add item
      [addItem.fulfilled.type]: (state, action) => {
         state.totalItems += 1;
         state.totalPrice = toFixedPrice(Number(state.totalPrice) + Number(action.payload.item?.price));
         state.isCartProcessing = false;
         state.items = state.items.map(item => {
            if (item._id === action.payload._id) {
               item.count += 1;
               item.totalPrice = toFixedPrice(Number(item.totalPrice) + Number(action.payload.item?.price));
            }

            return item;
         })
      },

      [addItem.pending.type]: (state, action) => {
         state.isCartProcessing = true;
      },

      [addItem.rejected.type]: (state, action) => {
         state.isCartProcessing = false;
      },

      //subtract item
      [subItem.fulfilled.type]: (state, action) => {
         state.totalItems -= 1;
         state.totalPrice = toFixedPrice(Number(state.totalPrice) - Number(action.payload.item?.price));
         state.isCartProcessing = false;
         state.items = state.items.map(item => {
            if (item._id === action.payload._id) {
               item.count -= 1;
               item.totalPrice = toFixedPrice(Number(item.totalPrice) - Number(action.payload.item?.price));
            }

            return item;
         })
      },

      [subItem.pending.type]: (state, action) => {
         state.isCartProcessing = true;
      },

      [subItem.rejected.type]: (state, action) => {
         state.isCartProcessing = false;
      },

      //items
      [setItems]: (state, action) => {
         state.items = action.payload
      },

      //items count
      [setTotalItems]: (state, action) => {
         state.totalItems = action.payload
      },

      //total price
      [setTotalPrice]: (state, action) => {
         state.totalPrice = action.payload
      },

      //clear cart after logout
      [clearCart]: (state) => {
         state.cart = null;
         state.isFetching = false;
         state.error = null;
         state.items = [];
         state.totalItems = 0;
         state.totalPrice = 0;
      },
   }
})

export const cartReducer = cartSlice.reducer