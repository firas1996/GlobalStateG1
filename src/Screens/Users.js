import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import UserItem from "../components/UserItem";
import { FavUsersContext } from "../store/context/favUsersContext";
import { useSelector } from "react-redux";

const Users = () => {
  // const userss = useSelector((state) => state.Users.users);
  const ctx = useContext(FavUsersContext);
  const [userData, setUserData] = useState("");

  const userInputHandler = (data) => {
    setUserData(data);
  };
  const addNewUser = () => {
    if (userData != "") {
      ctx.createUser(userData);
      setUserData("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={userInputHandler}
          value={userData}
        />
        <Button title="Add" onPress={addNewUser} />
      </View>
      <View style={styles.users}>
        <FlatList
          data={ctx.users}
          renderItem={(user) => (
            <UserItem
              removeUser={ctx.removeUser}
              id={user.item.key}
              name={user.item.name}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  users: {
    flex: 7,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
