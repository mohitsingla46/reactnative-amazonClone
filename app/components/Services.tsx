import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import amazonpay from "../assets/amazon-pay.png";
import sendmoney from "../assets/send-money.jpg";
import scanqr from "../assets/scan-qr.jpeg";
import paybills from "../assets/pay-bills.jpeg";
import { RecentSearchData } from "../data/RecentSearchData";

const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}
      style={styles.container}
    >
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={amazonpay} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={sendmoney} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={scanqr} />
            <Text style={styles.title}>Scan any QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={paybills} />
            <Text style={styles.title}>Recharge & Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map((item) => (
        <View key={item.id} style={styles.outerContainer}>
          <Text style={styles.recentSearch}>{item.title}</Text>
          <Image source={item.image} style={styles.serviceImg} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  serviceContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    elevation: 5,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  innerContainer: {
    padding: 10,
    alignItems: "center",
    paddingTop: 15,
    width: 95,
  },
  title: {
    fontSize: 10,
    color: "black",
    marginTop: 2,
  },
  outerContainer: {
    backgroundColor: "white",
    marginLeft: 8,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 140,
  },
  serviceImg: {
    width: "100%",
    height: 130,
  },
  recentSearch: {
    fontSize: 13,
    color: "black",
    marginBottom: 8,
  },
});

export default Services;
