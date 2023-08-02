import { FC } from "react";
import { ProductProps } from "../interfaces";
import { StyleSheet, Text, View } from "react-native";

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../constants";
import { AppDispatch } from "../types";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/basketSlice";

export const ProductBasket: FC<ProductProps> = ({ product }) => {

  const dispatch: AppDispatch = useDispatch();

  return (
    <View style={styles.productBasket}>
      <Text>Name: {product.title}</Text>
      <Text>Price: {product.price}</Text>
      <Text>Description: {product.description}</Text>
      <TouchableOpacity
        onPress={() => dispatch(removeProduct(product))}
      >
        <Feather name="trash" size={24} color={colors.accentColor} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  productBasket: {
    borderWidth: 1,
    width: "48%",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  }
});
