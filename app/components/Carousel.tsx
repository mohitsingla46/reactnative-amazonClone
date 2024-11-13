import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import CarouselSlider, {Pagination} from 'react-native-snap-carousel';
import {CarouselData} from '../data/CarouselData';

const sliderWidth = Dimensions.get('screen').width;

const Carousel = () => {
  const carouselRef = useRef<React.ElementRef<typeof CarouselSlider> | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.imgStyle} />
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <CarouselSlider
        ref={carouselRef}
        data={CarouselData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={500}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={CarouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          bottom: 0,
          left: '15%',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotStyle={{width: 15, height: 15, borderRadius: 10}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotColor="green"
        inactiveDotColor="#FFFFFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
  },
  imgStyle: {
    height: 250,
    width: '100%',
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Carousel;