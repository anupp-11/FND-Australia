import { Ionicons } from "@expo/vector-icons";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import { PRIMARY_COLOR, PRIMARY_WHITE_COLOR } from "../../constants/Colors";
import OrderInfoScreen from "../../screens/orders/OrderInfoScreen";
import OrderListScreen from "../../screens/orders/OrderListScreen";
import { OrdersTabParamList } from "../../types";

import ProductScreen from "../../screens/products/ProductInfoScreen";
const OrdersStack = createStackNavigator<OrdersTabParamList>();

export default function OrderNavigator() {
  const navigation = useNavigation();
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="OrderListScreen"
        component={OrderListScreen}
        options={{
          
          header: ({ navigation }) => {
            if(Platform.OS === "android"){
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 0,
                          routes: [{ name: "Products" }]
                        }));
                     
                  }}/>
                  <Appbar.Content title="Orders" />
                  
                </Appbar.Header>
              );

            }else{
              return(
                <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
                 
                  <Appbar.Content title="Orders" />
                  
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
       <OrdersStack.Screen
        name="OrderScreen"
        component={OrderInfoScreen}
        options={{
          
          header: ({ navigation }) => {
            if(Platform.OS === "android"){
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     
                      navigation.goBack();
                     
                  }}/>
                  <Appbar.Content title="Order Info" />
                  
                </Appbar.Header>
              );

            }else{
              return(
                <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     navigation.goBack()
                  }}/>
                  <Appbar.Content title="Order Info" />
                 
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
       <OrdersStack.Screen
        name="OrderProductScreen"
        component={ProductScreen}
        options={{
          
          header: ({ navigation }) => {
            if(Platform.OS === "android"){
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                   
                    if(navigation.canGoBack()){
                      navigation.goBack();
                    }else{
                      navigation.navigate("OrderListScreen");
                    }
                    
                  }}/>
                  <Appbar.Content title="Previously Ordered" />
                  
                </Appbar.Header>
              );
            }else{
              return (
                <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     if(navigation.canGoBack()){
                      navigation.goBack();
                    }else{
                      navigation.navigate("OrderListScreen");
                    }
                  }}/>
                  <Appbar.Content title="Previously Ordered" />
                  
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
    </OrdersStack.Navigator>
  );
}
