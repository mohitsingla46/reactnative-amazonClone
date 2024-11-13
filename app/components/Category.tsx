import {
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Categories } from "../data/Categories";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Category = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
    >
      {Categories.map((item) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Product")}
          key={item.id}
          style={styles.category}
        >
          <Image source={item.image} style={styles.imgStyle} />
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 10,
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 10,
    color: "#000000",
  },
  category: {
    paddingHorizontal: 8,
    alignItems: "center",
  },
});

export default Category;
