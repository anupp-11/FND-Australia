import { Ionicons } from "@expo/vector-icons";
import { useNavigation, CommonActions, StackActions } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import OrderComponent from "../../components/cart/Order";
import { PRIMARY_COLOR, PRIMARY_WHITE_COLOR } from "../../constants/Colors";
import CartScreen from "../../screens/CartScreen";
import { getCartCount, getCartCountTitle, getOrderTotal } from "../../service/CartService";
import { CartTabParamList } from "../../types";


const CartStack = createStackNavigator<CartTabParamList>();

export default function CartNavigator() {
  const navigation = useNavigation();
  const [cartHeader, setCartHeader] = useState('Cart')
  const [orderTotalTitle, setOrderTotalTitle] = useState("Order")


  useEffect(() => {

    async function loadItems() {
      const headerTitle = await getCartCountTitle();
      setCartHeader(headerTitle);

      const totalOrder = await getOrderTotal();
      setOrderTotalTitle(`Est Total $${totalOrder}`);
    }

    loadItems();
    EventRegister.addEventListener("cartUpdated", async (data) => {
      
      const headerTitle = await getCartCountTitle();
        
      setCartHeader(headerTitle);
      const totalOrder = await getOrderTotal();
      setOrderTotalTitle(`Est Total $${totalOrder}`);
    });
  }, []);

  const TAB_TO_RESET = 'CartScreen';
  const resetHomeStackOnTabPress = ({ navigation, route }) => ({
  tabPress: (e) => {
    const state = navigation.dangerouslyGetState();

    if (state) {
      // Grab all the tabs that are NOT the one we just pressed
      const nonTargetTabs = state.routes.filter((r) => r.key !== e.target);

      nonTargetTabs.forEach((tab) => {
        // Find the tab we want to reset and grab the key of the nested stack
        const tabName = tab?.name;
        const stackKey = tab?.state?.key;

        if (stackKey && tabName === TAB_TO_RESET) {
          // Pass the stack key that we want to reset and use popToTop to reset it
          navigation.dispatch({
            ...StackActions.popToTop(),
            target: stackKey,
          });
        }
      });
    }
  },
});

  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{

          header: ({ navigation }) => {
           
            if (Platform.OS === "android") {
              return (
                <Appbar.Header style={{ backgroundColor: PRIMARY_COLOR }}>
                  <Appbar.BackAction onPress={() => {
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{ name: "Products" }]
                      }));
                  }} />
                  <Appbar.Content title={cartHeader} />

                </Appbar.Header>
              );

            } else {

              return (
                <Appbar.Header style={{ backgroundColor: PRIMARY_WHITE_COLOR }}>

                  <Appbar.Content title={cartHeader} />


                </Appbar.Header>
              );
            }


          },

          transitionSpec: {
            open: TransitionSpecs.FadeOutToBottomAndroidSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec
          }
        }}
      />
      <CartStack.Screen
        name="OrderScreen"
        component={OrderComponent}
        options={{

          header: ({ navigation }) => {
            
            if (Platform.OS === "android") {
              return (
                <Appbar.Header style={{ backgroundColor: PRIMARY_COLOR }}>
                  <Appbar.BackAction onPress={() => {
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{ name: "Products" }]
                      }));
                  }} />
                  <Appbar.Content title={orderTotalTitle} />

                </Appbar.Header>
              );

            } else {
              
              return(
                <Appbar.Header style={{backgroundColor: PRIMARY_WHITE_COLOR}}>
                  <Appbar.BackAction onPress={() =>{
                     navigation.navigate("CartScreen");
                  }}/>
                  <Appbar.Content title={orderTotalTitle}  titleStyle={{fontWeight:'600'}}/>
                  
                </Appbar.Header>
              );
            }


          },

          transitionSpec: {
            open: TransitionSpecs.FadeOutToBottomAndroidSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec
          }
        }}
      />
    </CartStack.Navigator>
  );
}