import { StyleSheet, Image, View, Platform, Text, Keyboard } from "react-native";
import { SearchBar, Icon, Badge, withBadge } from "react-native-elements";
import { useState, useEffect } from "react";
import * as React from "react";
import {
  PRIMARY_BACKGROUND_GRAY_COLOR,
  PRIMARY_COLOR,
  PRIMARY_DARK_COLOR,
  PRIMARY_LIGHT_COLOR,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_GRAY_COLOR,
  PRIMARY_WHITE_COLOR,
} from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { getAccountName } from "../../service/AccountService";
import { EventRegister } from "react-native-event-listeners";
import { getCart, getCartCount } from "../../service/CartService";


export default class  SearchHeader extends React.Component {
  searchBar: SearchBar | null;

  constructor(props){
    super(props);

     this.state = {
       accountName: "",
       searchValue: "",
       cartItems:0
     };
     EventRegister.addEventListener("cartUpdated", (data) => {

      this.setState({cartItems: data});
    });
    
    
 
  }

  

  

  componentDidMount = async () =>{
    
    const accountName = await getAccountName();
    this.setState({accountName: accountName});
    var items = await getCartCount();
    this.setState({cartItems: items});
  }

  componentDidUpdate = () =>{
      
  }

  
  
   
    
   iosScanIcon(){
     if(!this.state.searchValue ||this.state.searchValue.length == 0){
       return(
        <Ionicons
              
        onPress={() => {
          this.props.navigation.navigate("Scanner");
        }}
        name="barcode-sharp"
        style={{ color: PRIMARY_TEXT_GRAY_COLOR, fontSize: 30, marginTop:30, left:-20, marginLeft:-30}}
      />
       );
     }
   }
   SearchBarIOS() {
    return (
      <View  style={styles.iosContainer}>
        
         <SearchBar
         ref={search => this.searchBar = search}
          placeholder="Search products..."
          inputContainerStyle={styles.iosInputContainerStyle}
          containerStyle={styles.iosSearchContainerStyle}
          value={this.state.searchValue}
          round
         
          onSubmitEditing={() => {
            this.searchBar?.clear();
            this.props.navigation.navigate("SearchProductScreen", {
              searchValue: this.state.searchValue,
            });
          
          }}
          onChangeText={(text) => {
            
            this.setState({searchValue: text});
          }}
          
         
        />
        {this.iosScanIcon()}
      </View>
    );
  }

   SearchBarAndroid() {
    const BadgedIcon = withBadge(this.state.cartItems)(Icon);
    return (
      <View>
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
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Text style={{ color: PRIMARY_TEXT_COLOR, fontSize: 20 }}>
              {" "}
              {this.state.accountName}
            </Text>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", paddingRight: 15 }}
          >
            <Ionicons
              onPress={() => {
                this.props.navigation.navigate("Scanner");
              }}
              name="barcode-sharp"
              style={{ color: "#ffff", fontSize: 30 }}
            />
            <BadgedIcon
              containerStyle={{ marginLeft: 10 }}
              iconStyle={{ color: "#ffff", fontSize: 30 }}
              type="ionicon"
              onPress={() => {
                this.props.navigation.navigate("Cart");
              }}
              name="cart-outline"
            />
          </View>
        </View>
        <SearchBar
          placeholder="Search products..."
          inputContainerStyle={styles.androidInputContainerStyle}
          containerStyle={styles.androidSearchContainerStyle}
          value={this.state.searchValue}
          onSubmitEditing={() => {
            this.props.navigation.navigate("SearchProductScreen", {
              searchValue: this.state.searchValue,
            });
            this.setState({searchValue: ""});
          }}
          onChangeText={(text) => {
            this.setState({searchValue: text});
          }}
          onFocus={() => { }}
        />
        
      </View>
      {/* <View>
          <CarouselCards/>
      </View> */}
      
      </View>
      
    );
  }
  render(){

      if(Platform.OS === "android"){
        return(this.SearchBarAndroid());
      }else{
        return(this.SearchBarIOS());
      }
      
   
  }
  


}

const styles = StyleSheet.create({
  androidContainer: {
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
  iosContainer: {
    paddingTop: 20,
    backgroundColor: PRIMARY_BACKGROUND_GRAY_COLOR,
    height: 100,
    display: "flex",
    flexDirection:"row",
    alignItems: "center"
  },
  iosInputContainerStyle: {
    backgroundColor: "white",
    borderColor: "#29B6F6",
    
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
    paddingBottom:0,
    paddingTop:30
   
  },
});
