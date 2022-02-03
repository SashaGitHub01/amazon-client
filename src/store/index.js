import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { catalogReducer } from "./slices/catalogSlice";
import { categoriesReducer } from "./slices/categoriesSlice";
import { itemReducer } from "./slices/itemSlice";
import { userReducer } from "./slices/userSlice";

const rootReducer = combineReducers({
   user: userReducer,
   categories: categoriesReducer,
   catalog: catalogReducer,
   item: itemReducer,
   cart: cartReducer
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}