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
import Background from '../../components/LoginComponents/Background';
import Header from '../../components/LoginComponents/Header';
import { theme } from '../../components/LoginComponents/theme';
import SleepDuration from '../../components/DailyLogs/Sleep';
import Mood from '../../components/DailyLogs/Mood';


const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log(searchValue);
  return (
    <View  >
      <View style = {styles.container}>

        <Text style = {styles.header}>
          My FND Australia
        </Text>

        <Text style = {styles.name}>
          <Text style = {{color : theme.colors.secondary}}>
            Welcome 
          </Text>
          {" "}
          <Text style = {{color : theme.colors.primary}}>
              Anup ! 
          </Text>
        </Text>

        <Text style = {{marginTop: 10 ,color : theme.colors.secondary, fontSize : 20, fontWeight: '600', }}>
          How are you feeling today?
        </Text>

        </View>
        <View style= {styles.mood}>
          <Text></Text>
        </View>
        <Mood/>
        <SleepDuration/>

      
      
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
