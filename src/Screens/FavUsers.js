import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserItem from "../components/UserItem";
import { useSelector } from "react-redux";

const FavUsers = () => {
  const favIds = useSelector((state) => state.FavUsers.ids);
  return (
    <View>
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
  );
};

export default FavUsers;

const styles = StyleSheet.create({});
