import { FC } from "react";
import { ProductProps } from "../interfaces";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants";
import { AppDispatch } from "../types";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/basketSlice";

export const Product: FC<ProductProps> = ({ product }) => {

  const dispatch: AppDispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(product));
  }

  return (
    <>
      <View style={styles.product}>
        <Text style={styles.text}>Name: {product.title}</Text>
        <Text style={styles.text}>Price: {product.price}</Text>
        <Text style={styles.text}>Description: {product.description}</Text>
        <TouchableOpacity
          onPress={handleAddProduct}
          style={styles.addToBasket}
        >
          <Text style={[styles.text, styles.textBtn]}>Add to Basket</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  product: {
    borderColor: "#333",
    borderWidth: 1,
    width: "48%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
  textBtn: {
    color: "#fff",
  },
  addToBasket: {
    backgroundColor: colors.accentColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  }
});
