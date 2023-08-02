import { FC, useEffect, useState } from "react";
import { useBasket } from "../hooks";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "../components/Container";

import Toast from 'react-native-toast-message';
import { SetOrder } from "../components/SetOrder";

import { SendOrderSuccess } from "../components/SendOrderSuccess";
import { useNavigation } from "@react-navigation/native";
import { AppDispatch } from "../types";
import { useDispatch } from "react-redux";
import { clearBasket } from "../redux/basketSlice";

export const Basket: FC = () => {

  const [successSendOrder, setSuccessSendOrder] = useState<boolean>(false);

  const navigation = useNavigation();

  const { basket } = useBasket();

  const dispatch: AppDispatch = useDispatch();

  const handleSendOrder = () => {
    if (basket.list.length === 0) {
      Toast.show({
        type: "error",
        text1: "Choose one product",
      });

      return;
    };

    setSuccessSendOrder(true);

    console.log(basket);
    dispatch(clearBasket());
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setSuccessSendOrder(false);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <Container>
        <Text style={styles.price}>Total price order: {basket.total}</Text>
        {
          successSendOrder
            ? <SendOrderSuccess />
            : <SetOrder handleSendOrder={handleSendOrder} />
        }
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
  }
});
