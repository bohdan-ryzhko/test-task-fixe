import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FC } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from '@expo/vector-icons';
import { useBasket } from "../hooks";
import { Platform, StyleSheet, Text, View } from "react-native";

type RootStackParamList = {
  Main: undefined;
  Basket: undefined;
};

export const BasketNavigation: FC = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { basket } = useBasket();

  return (
    <>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Basket")}
      >
        <Ionicons name="basket-outline" size={30} color="#fff" />
        {
          basket.list.length > 0 &&
          <View style={
              Platform.OS === "ios"
                ? styles.countIos
                : styles.countAndroid
            }>
              <Text style={styles.countText}>{basket.list.length}</Text>
          </View>
        }
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  btn: {
    position: "relative",
  },
  countIos: {
    position: "absolute",
    backgroundColor: "tomato",
    width: 15,
    height: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    right: -5,
    top: -5,
  },
  countAndroid: {
    position: "absolute",
    backgroundColor: "tomato",
    width: 15,
    height: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    top: 0,
  },
  countText: {
    color: "#fff",
    fontSize: 10,
  }
});
