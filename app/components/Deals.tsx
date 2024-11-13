import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import React from "react";
import { MyDeals } from "../data/MyDeals";

const Deals = () => {
  const renderDealItem: ListRenderItem<Deal> = ({ item }) => (
    <View style={styles.dealContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.dealImage} />
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.offDealSection}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>{item.discount}</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Limited time deal</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deals for you</Text>
      <FlatList
        data={MyDeals}
        renderItem={renderDealItem}
        keyExtractor={(item, index) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.dealsList}
        showsVerticalScrollIndicator={false}
      />
      <Text style={styles.seeAllText}>See all deals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    marginLeft: 5,
  },
  dealsList: {
    alignItems: "center",
  },
  row: {
    justifyContent: "space-between",
  },
  dealContainer: {
    width: "49%",
    borderRadius: 8,
    paddingHorizontal: 1,
  },
  imageContainer: {
    backgroundColor: "#00000008",
    alignItems: "center",
    padding: 10,
    marginBottom: 8,
  },
  dealImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    resizeMode: "contain",
  },
  bottomSection: {
    marginBottom: 10,
  },
  offDealBtn: {
    backgroundColor: "#be0201",
    width: 60,
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
  },
  offDeal: {
    color: "white",
    fontSize: 12,
  },
  deal: {
    color: "#be0201",
    fontWeight: "600",
    marginLeft: 6,
    fontSize: 11,
  },
  offDealSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    color: "#007AFF",
    marginTop: 5,
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Deals;
