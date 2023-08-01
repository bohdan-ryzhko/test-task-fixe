import { FC } from "react";
import { IProduct } from "../interfaces";
import { StyleSheet, Text, View } from "react-native";

interface ProductProps {
  product: IProduct;
}

export const Product: FC<ProductProps> = ({ product }) => {
  return (
    <>
      <View style={styles.product}>
        <Text style={styles.text}>Name: {product.title}</Text>
        <Text style={styles.text}>Price: {product.price}</Text>
        <Text style={styles.text}>Description: {product.description}</Text>
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
  }
});
