import { StyleSheet, Image, View, Platform, Text } from "react-native";
import { SearchBar, Icon, Badge, withBadge } from "react-native-elements";
import { useState, useEffect } from "react";
import * as React from "react";
import {
  PRIMARY_COLOR,
  PRIMARY_DARK_COLOR,
  PRIMARY_TEXT_COLOR,
  PRIMARY_WHITE_COLOR,
} from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { getAccountName } from "../../service/AccountService";
import { EventRegister } from "react-native-event-listeners";
import { getCart, getCartCount } from "../../service/CartService";

export default function SearchHeader({ navigation }) {
  const [accountName, setAccountName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState(0);

  const BadgedIcon = withBadge(cartItems)(Icon);

  useEffect(() => {
    async function getToken() {
      const accountName = await getAccountName();
      setAccountName(accountName);
    }
    getToken();

    (async function addCartItem() {
      var items = await getCartCount();

      setCartItems(items);
    })();

    EventRegister.addEventListener("cartUpdated", (data) => {

      setCartItems(data);
    });
  }, []);

  function SearchBarIOS() {
    return (
      <View style={styles.iosContainer}>
        <View style={{display: 'flex', justifyContent: "center", alignItems: 'center'}} >
        <Text style={{ color: PRIMARY_TEXT_COLOR, fontSize: 20, fontWeight: "600" }}>
              {" "}
              {accountName}
            </Text>
        </View>
       
         <SearchBar
          placeholder="Search products..."
          inputContainerStyle={styles.iosInputContainerStyle}
          containerStyle={styles.iosSearchContainerStyle}
          value={searchValue}
          round
          onSubmitEditing={() => {
            navigation.navigate("SearchProductScreen", {
              searchValue: searchValue,
            });
            setSearchValue("");
          }}
          onChangeText={(text) => {
            setSearchValue(text);
          }}
          onFocus={() => { }}
        />
      </View>
    );
  }

  function SearchBarAndroid() {
    return (

      <View style={styles.androidContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="menu"
              style={{ color: "#ffff", fontSize: 30, marginRight: 10 }}
              onPress={() => navigation.openDrawer()}
            />
            <Text style={{ color: PRIMARY_TEXT_COLOR, fontSize: 20 }}>
              {" "}
              {accountName}
            </Text>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", paddingRight: 15 }}
          >
            <Ionicons
              onPress={() => {
                navigation.navigate("Scanner");
              }}
              name="barcode-sharp"
              style={{ color: "#ffff", fontSize: 30 }}
            />
            <BadgedIcon
              containerStyle={{ marginLeft: 10 }}
              iconStyle={{ color: "#ffff", fontSize: 30 }}
              type="ionicon"
              onPress={() => {
                navigation.navigate("Cart");
              }}
              name="cart-outline"
            />
          </View>
        </View>
        <SearchBar
          placeholder="Search products..."
          inputContainerStyle={styles.androidInputContainerStyle}
          containerStyle={styles.androidSearchContainerStyle}
          value={searchValue}
          onSubmitEditing={() => {
            navigation.navigate("SearchProductScreen", {
              searchValue: searchValue,
            });
            setSearchValue("");
          }}
          onChangeText={(text) => {
            setSearchValue(text);
          }}
          onFocus={() => { }}
        />
      </View>

    );
  }
  return (
    <View>
      { Platform.OS == 'android' ? <SearchBarAndroid /> : <SearchBarIOS />}
    </View>


  );


}

const styles = StyleSheet.create({
  androidContainer: {
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: PRIMARY_COLOR,
    height: 140,
  },
  iosContainer: {
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: PRIMARY_COLOR,
    height: 140,
  },
  androidInputContainerStyle: {
    backgroundColor: "white",
    borderColor: "#29B6F6",
    height: 50,
  },
  androidSearchContainerStyle: {
    backgroundColor: "transparent",
    alignSelf: "center",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 14,
  },
  iosInputContainerStyle: {
    backgroundColor: "white",
    borderColor: "#29B6F6",
    height: 50,
  },
  iosSearchContainerStyle: {
    backgroundColor: "transparent",
    alignSelf: "center",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 14,
  },
});
