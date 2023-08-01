import { FC } from "react";
import { ProductProps } from "../interfaces";
import { Text, View } from "react-native";

export const ProductBasket: FC<ProductProps> = ({ product }) => {
  return (
    <View>
      <Text>Name: {product.title}</Text>
      <Text>Price: {product.price}</Text>
      <Text>Description: {product.description}</Text>
    </View>
  )
}