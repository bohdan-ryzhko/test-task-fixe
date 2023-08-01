import { IProduct } from './../interfaces/IProduct';
import { createSlice } from "@reduxjs/toolkit";
import { getProductList } from "./operations";

export interface ProductSliceState {
  list: IProduct[];
  isLoad: boolean;
  error: null | unknown;
}

const initialState: ProductSliceState = {
  list: [],
  isLoad: false,
  error: null,
}

const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.isLoad = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
      })
  }
});

export const productReducer = productSlice.reducer;