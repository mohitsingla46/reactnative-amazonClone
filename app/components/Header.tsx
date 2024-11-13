import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#FD7E21", "#F7CD3F"]}
        style={styles.container}
      >
        <View style={styles.inputBox}>
          <View style={styles.searchText}>
            <Ionicons name="search" size={22} color={"#1f1f1f"} />
            <TextInput
              placeholder="Search or ask a question"
              placeholderTextColor={"#636363"}
            />
          </View>
          <View style={styles.searchMedia}>
            <AntDesign name="scan1" size={22} color={"#636363"} />
            <Feather name="mic" size={22} color={"#636363"} />
          </View>
        </View>
        <MaterialIcons name="qr-code-scanner" size={22} color={"#000000"} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBox: {
    flexDirection: "row",
    alignContent: "center",
    borderWidth: 1,
    borderColor: "#a1bcc0",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    width: "90%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    elevation: 5,
  },
  searchText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  searchMedia: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});

export default Header;
