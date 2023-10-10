import { combineReducers, createSlice } from "@reduxjs/toolkit";

const cartProductSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload)
    },
    removeProduct(state, action) {
      state.splice(action.payload, 1)
    }
  }
});

export default combineReducers({
  cartProductSlice: cartProductSlice.reducer
});
export const { addProduct, removeProduct } = cartProductSlice.actions;