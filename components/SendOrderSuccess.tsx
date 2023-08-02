import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from '@expo/vector-icons';

const getNumberOrder = () => Math.round(1 - 0.5 + Math.random() * (99999999 - 1 + 1));

export const SendOrderSuccess: FC = () => {

  return (
    <View style={styles.page}>
      <View>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
      </View>
      <Text>Your order {getNumberOrder()} for has been successfully shipped.</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
