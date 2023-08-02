import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces";

import Toast from 'react-native-toast-message';

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
      if (repeatProduct !== undefined) {
        Toast.show({
          type: "error",
          text1: `${action.payload.title} is already in your basket`,
        });
        return;
      };

      state.list.push(action.payload);
      state.total = state.list.reduce(calcTotal, 0);

      Toast.show({
        type: "success",
        text1: `${action.payload.title} add to basket`,
      });
    },
    clearBasket(state) {
      state.list = [];
      state.total = 0;
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
