//import liraries
import React, {useState} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import {Text, SafeAreaView, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#f2f2f2'}}>
      <View
        style={{
          margin: 10,
          //padding: 2,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: 1.5,
          borderColor: '#28cd00',
          justifyContent:'space-between'
          
        }}>
        


        <TextInput
          style={{marginLeft: 10, fontFamily: 'Poppins-Regular'}}
          placeholder="Search Product...."
          value={searchValue}
          onChangeText={setSearchValue}
        />
        <Feather name="search" size= {20}  style={{ color:'black', marginRight:10}}/>
      </View>
    </SafeAreaView>
  );
};

// create a component
const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default HomeStack;
