import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces";

export interface BasketState {
  list: IProduct[],
}

const initialState: BasketState = {
  list: [],
}

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
});

export const basketReducer = basketSlice.reducer;
