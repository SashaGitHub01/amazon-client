import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from '../../API/UserService'

export const fetchAuth = createAsyncThunk(
   'user/fetchAuth',
   async (_, thunk) => {
      try {
         const res = await UsersService.auth();

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
         return thunk.rejectWithValue('Sign In error')
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
         return thunk.rejectWithValue('Sign Up error')
      }
   }
)

export const fetchLogout = createAsyncThunk(
   'user/fetchLogout',
   async (_, thunk) => {
      try {
         const res = await UsersService.logout();
      } catch (err) {
         return thunk.rejectWithValue(err)
      }
   }
)