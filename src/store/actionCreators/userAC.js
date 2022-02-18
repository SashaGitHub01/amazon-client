import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { UsersService } from '../../API/UserService'

export const resetError = createAction('user/resetError')

export const fetchAuth = createAsyncThunk(
   'user/fetchAuth',
   async (_, thunk) => {
      try {
         const res = await UsersService.auth();
         if (!res) throw Error('Unauthorized')
         return res;
      } catch (err) {
         return thunk.rejectWithValue('Authorization error')
      }
   }
)

export const fetchSignIn = createAsyncThunk(
   'user/fetchSignIn',
   async (body, thunk) => {
      try {
         const res = await UsersService.login(body);

         return res;
      } catch (err) {
         return thunk.rejectWithValue(err.response?.data.message || 'Server error')
      }
   }
)

export const fetchSignUp = createAsyncThunk(
   'user/fetchSignUp',
   async (body, thunk) => {
      try {
         const res = await UsersService.register(body);

         return res;
      } catch (err) {
         return thunk.rejectWithValue(err.response?.data.message || 'Server error')
      }
   }
)

export const fetchLogout = createAsyncThunk(
   'user/fetchLogout',
   async (_, thunk) => {
      try {
         await UsersService.logout();
      } catch (err) {
         return thunk.rejectWithValue(err?.message)
      }
   }
)