import { useSelector } from "react-redux";
import { selectBasket } from "../redux/selectors";

export const useBasket = () => ({
  basket: useSelector(selectBasket),
});
