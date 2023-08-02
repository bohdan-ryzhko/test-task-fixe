import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces";

export interface BasketState {
  list: IProduct[];
  total: number;
}

const initialState: BasketState = {
  list: [],
  total: 0,
}

const calcTotal = (acc: number, product: IProduct) => acc += product.price;

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action) {
      const repeatProduct = state.list.find(product => product.id === action.payload.id);
      if (repeatProduct !== undefined) return;

      state.list.push(action.payload);
      state.total = state.list.reduce(calcTotal, 0);
    },
    clearBasket(state) {
      state.list = [];
      state.total = state.list.reduce(calcTotal, 0);
    },
    removeProduct(state, action) {
      const removedIndex = state.list.findIndex(product => product.id === action.payload.id);

      if (removedIndex === undefined) return;

      state.list.splice(removedIndex, 1);
      state.total = state.list.reduce(calcTotal, 0);
    }
  },
});

export const { addProduct, clearBasket, removeProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
