import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Category from "../components/Category";
import CarouselSlider from "../components/Carousel";
import Services from "../components/Services";
import Deals from "../components/Deals";
import { ScrollView } from "react-native";
import Brands from "../components/Brands";

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <SubHeader />
      <Category />
      <CarouselSlider />
      <Services />
      <Deals />
      <Brands />
    </ScrollView>
  );
}

export default HomeScreen;
