import { FC } from "react";
import { useBasket } from "../hooks";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "../components/Container";
import { ProductList } from "../components/ProductList";
import { ProductBasket } from "../components/ProductBasket";

export const Basket: FC = () => {

  const { basket } = useBasket();

  return (
    <View style={styles.wrapper}>
      <Container>
        <Text>Total price order: {basket.total}</Text>
        <ProductList
          product={ProductBasket}
          list={basket.list}
        />
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 20,
  }
});
