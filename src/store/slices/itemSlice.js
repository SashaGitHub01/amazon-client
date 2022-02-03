import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateRate, fetchItem } from "../actionCreators/itemAC";
import { toFixedRate } from '../../utils/toFixedRate'

const initialState = {
   item: null,
   isFetching: false,
   rating: null,
   isCreatingRate: false,
   error: null
}

const itemSlice = createSlice({
   name: 'item',
   initialState,
   extraReducers: {
      [fetchItem.fulfilled.type]: (state, action) => {
         state.isFetching = false;
         state.error = null;
         state.item = action.payload;
         state.rating = action.payload.rating
      },

      [fetchItem.rejected.type]: (state, action) => {
         state.isFetching = false;
         state.error = action.payload;
         state.item = null;
         state.rating = null
      },

      [fetchItem.pending.type]: (state, action) => {
         state.isFetching = true;
      },

      //rate item
      [fetchCreateRate.fulfilled.type]: (state, action) => {
         state.isCreatingRate = false;
         state.rating.rates.push(action.payload);
         console.log(state.rating.totalRate, action.payload.rate, state.rating.count);
         state.rating.totalRate = toFixedRate(
            ((Number(state.rating.totalRate) * Number(state.rating.count) + Number(action.payload.rate)) / (Number(state.rating.count) + 1))
         );
         state.rating.count += 1;
      },

      [fetchCreateRate.pending.type]: (state, action) => {
         state.isCreatingRate = true;
      },

      [fetchCreateRate.rejected.type]: (state, action) => {
         state.isCreatingRate = false;
      },
   }
})

export const itemReducer = itemSlice.reducer;