import { FC } from "react";
import { ActionSheetIOS, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppDispatch } from "../types";
import { useDispatch } from "react-redux";
import { clearBasket } from "../redux/basketSlice";
import { useBasket } from "../hooks";

export const ClearBasket: FC = () => {

  const { basket } = useBasket();

  const dispatch: AppDispatch = useDispatch();

  const handleClearBasket = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["To Trash", "Cancel"],
        cancelButtonIndex: 1,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          dispatch(clearBasket());
        }
      }
    );
  }

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
