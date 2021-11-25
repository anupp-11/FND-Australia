import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import SearchHeader from "../../components/search-header/SearchHeader";
import { PRIMARY_COLOR, PRIMARY_WHITE_COLOR } from "../../constants/Colors";
import SearchProductScreen from "../../screens/products/SearchProductScreen";
import { ProductsTabParamList } from "../../types";

import ProductsListScreen from '../../screens/products/ProductsListScreen';

import ProductScreen from "../../screens/products/ProductInfoScreen";
import { Platform } from "react-native";
import CategoryInfoScreen from "../../screens/categories/CategoryInfoScreen";
import { getCategoryTitle } from "../../service/CategoryService";
const ProductsStack = createStackNavigator<ProductsTabParamList>();

export default function ProductNavigator(props) {

  const [categoryHeader, setCategoryHeader] = useState('Category')
  
   async function loadItems() {
    const headerTitle = await getCategoryTitle();
    setCategoryHeader(headerTitle);
  }

  loadItems();
 
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        name="ProductsScreen"
        component={ProductsListScreen}
        options={{
          header: ({ navigation }) => {
            return <SearchHeader navigation={navigation} />;
          },
          transitionSpec:{
            open: TransitionSpecs.FadeOutToBottomAndroidSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec
          }
        }}
      />
       
      <ProductsStack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          
          header: ({ navigation }) => {
            if(Platform.OS === "android"){
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                    debugger;
                    if(navigation.canGoBack()){
                      navigation.goBack();
                    }else{
                      navigation.navigate("ProductsScreen");
                    }
                    
                  }}/>
                  <Appbar.Content title="Item Details" />
                  
                </Appbar.Header>
              );
            }else{
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     navigation.navigate("ProductsScreen");
                  }}/>
                  <Appbar.Content title="Item Details" />
                  
                </Appbar.Header>
              );
            }
            
          },
        
          transitionSpec:{
            open: TransitionSpecs.FadeOutToBottomAndroidSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec
          }
        }}
      />

      
      
      <ProductsStack.Screen
        name="SearchProductScreen"
        component={SearchProductScreen}
        options={({ route }) => ({ 
          
          header: ({ navigation }) => {
            if(Platform.OS === "android"){
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                  
                    if(navigation.canGoBack()){
                      navigation.goBack();
                    }else{
                      navigation.navigate("ProductsScreen");
                    }
                    
                  }}/>
                  <Appbar.Content title="Search Items" />
                  
                </Appbar.Header>
              );
            }else{
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     navigation.navigate("ProductsScreen");
                  }}/>
                  <Appbar.Content title="Search Items" />
                  
                </Appbar.Header>
              );
            }
          },
        
          transitionSpec:{
            open: TransitionSpecs.FadeOutToBottomAndroidSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec
          }
          
         })}
       
      />

<ProductsStack.Screen
                    name="CategoryScreen"
                    component={CategoryInfoScreen}
                    options={{
                      
                      header: ({ navigation }) => {
                        if(Platform.OS === "android"){
                          return (
                            <Appbar.Header style={{backgroundColor: PRIMARY_COLOR}}>
                              <Appbar.BackAction onPress={() =>{
                                debugger;
                                if(navigation.canGoBack()){
                                  navigation.goBack();
                                }else{
                                  navigation.navigate("ProductsScreen");
                                }
                                
                              }}/>
                              <Appbar.Content title={categoryHeader} />
                              
                            </Appbar.Header>
                          );
                        }else{
                          return (
                            <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
                              <Appbar.BackAction onPress={() =>{
                                navigation.navigate("ProductsScreen");
                              }}/>
                              <Appbar.Content title="Item Details" />
                              
                            </Appbar.Header>
                          );
                        }
                        
                      },
                    
                      transitionSpec:{
                        open: TransitionSpecs.FadeOutToBottomAndroidSpec,
                        close: TransitionSpecs.FadeOutToBottomAndroidSpec
                      }
                    }}
                  />

    </ProductsStack.Navigator>
  );
}