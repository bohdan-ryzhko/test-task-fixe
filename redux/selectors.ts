import { BasketState } from "./basketSlice";
import { ProductSliceState } from "./productSlice";

interface State {
  basket: BasketState;
  productList: ProductSliceState;
}

export const selectBasket = (state: State) => state.basket;

export const selectProductList = (state: State) => state.productList.list;
export const selectProductLoad = (state: State) => state.productList.isLoad;
export const selectProductError = (state: State) => state.productList.error;
