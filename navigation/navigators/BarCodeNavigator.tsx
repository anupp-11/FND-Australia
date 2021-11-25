import { StackActions, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { BarCodeTabParamList } from "../../types";
import { Appbar } from "react-native-paper";
import { View, StyleSheet, Platform } from "react-native";
import { PRIMARY_BACKGROUND_GRAY_COLOR, PRIMARY_COLOR, PRIMARY_DARK_COLOR, PRIMARY_TEXT_GRAY_COLOR } from "../../constants/Colors";
import BarCodeScannerScreen from "../../screens/BarCodeScannerScreen";
import { EventRegister } from "react-native-event-listeners";
import { getCartCount } from "../../service/CartService";
import { Badge, Icon, withBadge } from "react-native-elements";

const BarCodeStack = createStackNavigator<BarCodeTabParamList>();

export function BarCodeNavigator() {
  const [cartItems, setCartItems] = useState(0);
  const navigation = useNavigation();
  const BadgedIcon = withBadge(cartItems)(Icon);
  useEffect(() => {
    (async function addCartItem() {
      var items = await getCartCount();

      setCartItems(items);
    })();

    EventRegister.addEventListener("cartUpdated", (data) => {
      setCartItems(data);
    });
  }, []);
  return (
    <BarCodeStack.Navigator>
      <BarCodeStack.Screen
        name="BarCode"
        component={BarCodeScannerScreen}
        options={{
          
          header: ({ navigation }) => {
           
            return (
              <View>
                <Appbar.Header style={{ backgroundColor: 'black' }}>
                  <Appbar.Action
                    icon="close"
                    onPress={() => {
                      navigation.dispatch(StackActions.popToTop());
                    }}
                  />
                  <Appbar.Content
                    style={styles.contentStyle}
                    title="BarCode Scanner"
                  />

                  <View>
                    <Badge
                      value={cartItems}
                      badgeStyle={{
                        backgroundColor: "red",
                        position: "absolute",
                        right: 0,
                      }}
                    >
                      {cartItems}
                    </Badge>
                    <Appbar.Action
                      onPress={() => {
                        navigation.navigate("Cart");
                      }}
                      icon="cart-outline"
                      color="white"
                    />
                  </View>
                </Appbar.Header>
              </View>
            );
          },
        }}
      />
    </BarCodeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  contentStyle: {
    display: "flex",

    flexDirection: "row",
  },
});
