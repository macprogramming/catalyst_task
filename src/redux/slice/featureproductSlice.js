import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFutureProducts = createAsyncThunk('fetchProducst', async () => {
  try{
      let res = await fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured', {
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

const productFeatureSlice = createSlice({
  name : 'featureproducts',
  initialState: {
    isLoading: false,
    data: null,
    isError: false
  },
  reducers: {
    addCaseFeatureProduct(state, action) {
      console.log(state)
      console.log(action)
      state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFutureProducts.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(fetchFutureProducts.fulfilled, (state, action) => {
      state.isLoading  = false;
      state.data = action.payload;
    });
    builder.addCase(fetchFutureProducts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    })
  }
});

export default productFeatureSlice.reducer;
export const { addCaseFeatureProduct } = productFeatureSlice.actions