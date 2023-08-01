import { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { IProduct } from "../interfaces";

interface ProductListProps {
  list: IProduct[];
  product: FC<{ product: IProduct }>;
}

export const ProductList: FC<ProductListProps> = ({ list, product: Product }) => {
  return (
    <>
      <View style={styles.wrapperList}>
        <FlatList
          data={list}
          renderItem={({ item }) => <Product product={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.productList}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapperList: {
    flex: 1,
  },
  productList: {
    justifyContent: "space-between",
  }
});
