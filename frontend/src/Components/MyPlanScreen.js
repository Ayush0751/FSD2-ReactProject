import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const MyPlanScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
          />
          <Text style={styles.name}>Matt Meyer </Text>
        </View>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Edit Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Health Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Edit Notifications</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#05445E",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "white",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#05445E",
    height: 800,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#05445E",
  },
  buttonContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: 250,
    borderRadius: 10,
    backgroundColor: "#D4F1F4",
    alignItems: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
export default MyPlanScreen;
