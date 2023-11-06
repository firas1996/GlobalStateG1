import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Users from "./src/Screens/Users";
import FavUsers from "./src/Screens/FavUsers";
import FavUsersContextProvider from "./src/store/context/favUsersContext";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <FavUsersContextProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Users" component={Users} />
            <Drawer.Screen name="Fav" component={FavUsers} />
          </Drawer.Navigator>
        </NavigationContainer>
      </FavUsersContextProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
