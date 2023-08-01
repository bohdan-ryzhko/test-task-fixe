import { FC, useEffect } from "react";
import { ProductList } from "../components/ProductList";
import { Container } from "../components/Container";
import { StyleSheet, View } from "react-native";

import { useProductList } from "../hooks";
import { Product } from "../components/Product";
import { AppDispatch } from "../types";
import { useDispatch } from "react-redux";
import { getProductList } from "../redux/operations";

export const ApplicationRoot: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const { list } = useProductList();

  return (
    <View style={styles.wrapper}>
      <Container>
        <ProductList
          product={Product}
          list={list}
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
