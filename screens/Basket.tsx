import { FC } from "react";
import { useBasket } from "../hooks";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "../components/Container";
import { ProductList } from "../components/ProductList";
import { ProductBasket } from "../components/ProductBasket";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../constants";

import Toast from 'react-native-toast-message';

export const Basket: FC = () => {

  const { basket } = useBasket();

  const handleSendOrder = () => {
    if (basket.list.length === 0) {
      Toast.show({
        type: "error",
        text1: "Choose one product",
      });

      return;
    };

    console.log(basket);
  }

  return (
    <View style={styles.wrapper}>
      <Container>
        <Text style={styles.price}>Total price order: {basket.total}</Text>
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
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 20,
  },
  price: {
    marginBottom: 20,
  },
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
