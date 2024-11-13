/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./app/components/BottomTab";

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={"dark-content"}
      />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#FD7E21", "#F7CD3F"]}
        style={styles.statusBarBackground}
      />
      <View style={styles.mainContent}>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  statusBarBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: Platform.OS === "ios" ? 44 : StatusBar.currentHeight,
  },
  mainContent: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 44 : StatusBar.currentHeight,
  },
});

export default App;
