import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth, fetchLogout, fetchSignIn, fetchSignUp } from "../actionCreators/userAC";

const initialState = {
   user: null,
   orders: [],
   rates: [],
   isAuth: false,
   isInitialized: false,
   error: null,
   isSigning: false,
   signError: null
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   extraReducers: {
      // auth
      [fetchAuth.fulfilled.type]: (state, action) => {
         state.isAuth = true;
         state.error = null;
         state.isInitialized = true;
         state.user = action.payload;
         state.orders = action.payload.orders
         state.rates = action.payload.rates
      },

      [fetchAuth.rejected.type]: (state, action) => {
         state.error = action.payload;
         state.isInitialized = true;
      },

      // logout
      [fetchLogout.pending.type]: (state, action) => {
         state.error = null
         state.user = null
         state.isAuth = false
         state.orders = []
         state.rates = []
      },

      // reg
      [fetchSignUp.fulfilled.type]: (state, action) => {
         state.isAuth = true;
         state.signError = null;
         state.isSigning = false;
         state.user = action.payload;
         state.orders = action.payload.orders
         state.rates = action.payload.rates
      },

      [fetchSignUp.pending.type]: (state, action) => {
         state.isSigning = true;
      },

      [fetchSignUp.rejected.type]: (state, action) => {
         state.signError = action.payload;
         state.isSigning = false;
      },

      // login
      [fetchSignIn.fulfilled.type]: (state, action) => {
         state.isAuth = true;
         state.signError = null;
         state.isSigning = false;
         state.user = action.payload
         state.orders = action.payload.orders
         state.rates = action.payload.rates
      },

      [fetchSignIn.pending.type]: (state, action) => {
         state.isSigning = true;
      },

      [fetchSignIn.rejected.type]: (state, action) => {
         state.signError = action.payload;
         state.isSigning = false;
      },
   }
})

export const userReducer = userSlice.reducer