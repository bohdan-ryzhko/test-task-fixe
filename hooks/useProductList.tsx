import { useSelector } from "react-redux";
import { selectProductError, selectProductList, selectProductLoad } from "../redux/selectors";

export const useProductList = () => ({
  list: useSelector(selectProductList),
  isLoad: useSelector(selectProductLoad),
  error: useSelector(selectProductError),
});
