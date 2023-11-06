import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const UserItem = (props) => {
  return (
    <View style={styles.userItem}>
      <Text style={styles.userText}>{props.name}</Text>
      <Pressable onPress={props.removeUser.bind(this, props.id)}>
        <Ionicons name="person-remove" size={24} color="white" />
      </Pressable>
    </View>
  );
};
const Users = () => {
  const [userData, setUserData] = useState("");
  const [Users, setUsers] = useState([]);
  const removeUser = (key) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.key !== key);
    });
  };

  const userInputHandler = (data) => {
    setUserData(data);
  };
  const addNewUser = () => {
    if (userData != "") {
      setUsers((prevState) => [
        ...prevState,
        { name: userData, key: Math.random().toString() },
      ]);
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
          data={Users}
          renderItem={(user) => (
            <UserItem
              removeUser={removeUser}
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
