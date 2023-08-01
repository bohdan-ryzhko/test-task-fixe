import { FC, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../types";
import { getProductList } from "../redux/operations";
import { useProductList } from "../hooks";
import { Product } from "./Product";

export const ProductList: FC = () => {

  const dispatch: AppDispatch = useDispatch();

  const { list } = useProductList();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <>
      <View>
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
  productList: {
    justifyContent: "space-between",
  }
});
