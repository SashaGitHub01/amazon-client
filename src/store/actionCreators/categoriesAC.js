import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryService } from "../../API/CategoryService";

export const fetchCategories = createAsyncThunk(
   'category/fetchCategories',
   async (_, thunk) => {
      try {
         const res = await CategoryService.getAll();

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Loading error')
      }
   }
)