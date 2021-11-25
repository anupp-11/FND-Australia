import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';

import styles from './styles';
import HomeImageCarousel from '../../components/HomeImageCarousel';
import ImageCarousal from '../../data/ImageCarousal';


const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log(searchValue);
  return (
    <View style={styles.page}>

      <Text>
        Welcome to homescreen
      </Text>
      {/* <ScrollView>
        <CarouselCards />
        <ScrollView>
          <FlatList
            data={categories.category}
            renderItem={({item}) => <HomeCategory category={item} />}
          />
        </ScrollView>
        <ScrollView>
          <Text style={styles.root}>All Products</Text>
          <FlatList
            data={products}
            renderItem={({item}) => <ProductItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </ScrollView> */}
    </View>
  );
};

export default HomeScreen;
