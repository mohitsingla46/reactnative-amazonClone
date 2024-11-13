import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Feather name="map-pin" size={18} color={"#000000"} />
      <Text style={styles.deliver}>Deliver to Mohit - Mohali 140301</Text>
      <MaterialIcons name="keyboard-arrow-down" size={22} color={"#000000"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#F7CD3F",
    elevation: 1,
    marginBottom: 10,
    gap: 5,
  },
  deliver: {
    fontSize: 13,
    color: "#2c4341",
  },
});

export default SubHeader;
