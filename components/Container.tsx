import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 15,
  }
});
