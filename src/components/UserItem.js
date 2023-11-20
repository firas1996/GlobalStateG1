import { Text, StyleSheet, View, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { FavUsersContext } from "../store/context/favUsersContext";

const UserItem = (props) => {
  const [isFav, setIsFav] = useState(false);
  const ctx = useContext(FavUsersContext);
  const favHandler = () => {
    setIsFav(!isFav);
    if (isFav) {
      ctx.removeFavorite(props.id);
    } else {
      ctx.addFavorite(props.id);
    }
    console.log(ctx.favUsersIds);
  };
  return (
    <View style={styles.userItem}>
      <Text style={styles.userText}>{props.name}</Text>
      <Pressable onPress={favHandler}>
        <Ionicons
          name={isFav ? "star" : "star-outline"}
          size={24}
          color="white"
        />
      </Pressable>
    </View>
  );
};
export default UserItem;

const styles = StyleSheet.create({
  userItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#ba3232",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userText: {
    color: "white",
  },
});
