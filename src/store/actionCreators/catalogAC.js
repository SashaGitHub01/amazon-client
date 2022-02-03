import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsService } from '../../API/ItemsService'

export const fetchCatalog = createAsyncThunk(
   'catalog/fetchCatalog',
   async (query, thunk) => {
      try {
         const res = await ItemsService.getAll(query.category, query.query)

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Loading error')
      }
   }
)