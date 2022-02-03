import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "../actionCreators/catalogAC";

const initialState = {
   items: [],
   isFetching: false,
   error: null
}

const catalogSlice = createSlice({
   name: 'catalog',
   initialState,
   extraReducers: {
      [fetchCatalog.fulfilled.type]: (state, action) => {
         state.items = action.payload;
         state.error = null;
         state.isFetching = false;
      },

      [fetchCatalog.rejected.type]: (state, action) => {
         state.error = action.payload;
         state.isFetching = false;
      },

      [fetchCatalog.pending.type]: (state, action) => {
         state.isFetching = true;
      },
   }
})

export const catalogReducer = catalogSlice.reducer