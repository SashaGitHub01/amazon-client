import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../actionCreators/categoriesAC";

const initialState = {
   categories: [],
   isFetching: false,
   error: null
}

const categoriesSlice = createSlice({
   name: 'category',
   initialState,
   extraReducers: {
      [fetchCategories.fulfilled.type]: (state, action) => {
         state.categories = action.payload;
         state.isFetching = false;
         state.error = null;
      },

      [fetchCategories.pending.type]: (state, action) => {
         state.isFetching = true;
      },

      [fetchCategories.rejected.type]: (state, action) => {
         state.isFetching = false;
         state.error = action.payload;
      }
   }
})

export const categoriesReducer = categoriesSlice.reducer