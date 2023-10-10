import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import cartdataSlice from "./slice/cartdataSlice";
import featureproductSlice from "./slice/featureproductSlice";
// import colorReducer from "./slice/colorSlice";

export const store = configureStore({
  reducer: {
    products : productsReducer,
    cartData : cartdataSlice,
    featureproducts: featureproductSlice
    // color: colorReducer
  }
})