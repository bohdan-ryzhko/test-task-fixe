import { FC } from "react";
import { ActionSheetIOS, Platform, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppDispatch } from "../types";
import { useDispatch } from "react-redux";
import { clearBasket } from "../redux/basketSlice";
import { useBasket } from "../hooks";

import { useActionSheet } from '@expo/react-native-action-sheet';

export const ClearBasket: FC = () => {

  const { basket } = useBasket();

  const dispatch: AppDispatch = useDispatch();

  const { showActionSheetWithOptions } = useActionSheet();

  const handleClearBasket = () => {
    const options = ["To Trash", "Cancel"];

    switch (Platform.OS) {
      case "ios":
        ActionSheetIOS.showActionSheetWithOptions({
            options,
            cancelButtonIndex: 1,
          },
          (buttonIndex) => {
            if (buttonIndex === 0) {
              dispatch(clearBasket());
            }
          });
        break;
      case "android":
        showActionSheetWithOptions({
          options,
          cancelButtonIndex: 1,
        }, (buttonIndex) => {
          switch (buttonIndex) {
            case 0:
              dispatch(clearBasket());
              break;
          }
        });
        break;
    }
  };

  return (
    <>
      {
        basket.list.length > 0 &&
        <TouchableOpacity
          onPress={handleClearBasket}
        >
          <Text style={styles.text}>Clear</Text>
        </TouchableOpacity>
      }
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 16,
  }
});
