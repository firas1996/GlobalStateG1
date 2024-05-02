import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
export function requestPermissionsAsync() {
  return Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
}
const Home = () => {
  const [notifData, setNotifData] = useState({
    idSender: "",
    userName: "",
  });
  const [trigger, setTrigger] = useState(false);
  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 2 },
    });
  }
  const notifHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Alert!!",
        body: "this is our first notification!!!",
        data: {
          idSender: "1",
          userName: "Firas",
        },
      },
      trigger: { seconds: 2 },
    });
    console.log("aaa");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      notifHandler();
      setTrigger(!trigger);
    }, 3000);
    // return ()=>{
    //   clearTimeout(timer)
    // }
  }, [trigger]);
  useEffect(() => {
    Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    }).then((ss) => {
      console.log("************", ss);
    });
  }, []);
  useEffect(() => {
    const myNotif = Notifications.addNotificationReceivedListener((notif) => {
      setNotifData(notif.request.content.data);
    });
    const recived = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );
    return () => {
      myNotif.remove();
      recived.remove();
    };
  }, []);
  return (
    <View style={styles.center}>
      {/* <Text>Id: {notifData.idSender}</Text>
      <Text>Name: {notifData.userName}</Text> */}
      <Button title="Test Notif" onPress={notifHandler} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
