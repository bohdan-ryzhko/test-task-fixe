import { FC } from "react";
import { ProductList } from "./ProductList";
import { ProductBasket } from "./ProductBasket";
import { useBasket } from "../hooks";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import { colors } from "../constants";

interface SetOrderProps {
  handleSendOrder: () => void;
}

export const SetOrder: FC<SetOrderProps> = ({ handleSendOrder }) => {

  const { basket } = useBasket();

  return (
    <>
      <ProductList
        product={ProductBasket}
        list={basket.list}
      />
      <TouchableOpacity
        onPress={handleSendOrder}
        style={styles.sendOrder}
      >
        <Text style={styles.sendOrderText}>Send order</Text>
      </TouchableOpacity>
    </>
  )
};

const styles = StyleSheet.create({
  sendOrder: {
    marginBottom: 20,
    backgroundColor: colors.accentColor,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
  },
  sendOrderText: {
    color: "#fff",
    fontSize: 18,
  }
});