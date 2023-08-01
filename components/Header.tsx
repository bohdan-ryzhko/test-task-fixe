import { FC } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container } from "./Container";

export const Header: FC = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Container>
        <View style={styles.headerInner}>
          <Ionicons name="basket-outline" size={30} color="#fff" />
        </View>
      </Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 110,
    backgroundColor: "#003580",
    marginBottom: 20,
  },
  headerInner: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  }
});
