import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducst', async () => {
  try{
      let res = await fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products', {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
        }
      });
      let data = await res.json();
      return data;
    }catch(err) {
      console.log(err)
    }
});

const productSlice = createSlice({
  name : 'products',
  initialState: {
    isLoading: false,
    data: null,
    isError: false
  },
  reducers: {
    addCaseProduct(state, action) {
      console.log(state)
      console.log(action)
      state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading  = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    })
  }
});

export default productSlice.reducer;
export const { addCaseProduct } = productSlice.actions