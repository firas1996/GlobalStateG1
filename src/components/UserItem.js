import { Text, StyleSheet, View, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const UserItem = (props) => {
  return (
    <View style={styles.userItem}>
      <Text style={styles.userText}>{props.name}</Text>
      <Pressable onPress={props.removeUser.bind(this, props.id)}>
        <Ionicons name="star-outline" size={24} color="white" />
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
