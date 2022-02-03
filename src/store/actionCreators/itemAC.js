import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsService } from "../../API/ItemsService";

export const fetchItem = createAsyncThunk(
   'item/fetchItem',
   async (id, thunk) => {
      try {
         const res = await ItemsService.getOne(id);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Loading error')
      }
   }
)

export const fetchCreateRate = createAsyncThunk(
   'item/fetchCreateRate',
   async (data, thunk) => {
      try {
         const res = await ItemsService.rateItem(data);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Loading error')
      }
   }
)