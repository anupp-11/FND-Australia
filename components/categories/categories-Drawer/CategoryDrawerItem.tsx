import { useNavigation } from "@react-navigation/native";
import { osInternalBuildId } from "expo-device";
import React, { PureComponent } from "react";
import {
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import { Card, Image } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  PRIMARY_BACKGROUND_GRAY_COLOR,
  PRIMARY_WHITE_COLOR,
} from "../../../constants/Colors";


let width = Dimensions.get("screen").width / 4;

export default class CategoryDrawerItem extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      category: props.category
    };

  }

  handleOnPress (){
    console.log("Category Pressed");
    this.props.navigation.navigate("CategoryScreen", {
      categoryId: this.state.category.id,
    });
  }
  
  render() {
    return (
      <TouchableOpacity
        
        onPress={() => this.handleOnPress()}
      >
        <View
          style={{
            backgroundColor: PRIMARY_BACKGROUND_GRAY_COLOR,
            padding: 10,
            paddingLeft: 15,
            height: 50,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View><Text style={styles.categoryName}>{this.state.category.name}</Text></View>
         
        </View> 
        
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  // row: {
  //   justifyContent: "space-between",
  // },
  cardHeaderView: {
    borderRadius: 10,
    flex: 0.5,
    width: width-10,
    padding: 10,
    paddingBottom: 10,
    backgroundColor: PRIMARY_WHITE_COLOR,
  },

  categoryName: {
    alignSelf: "center",
    marginTop:10,
    fontWeight:"700",
    marginBottom: 5,
    fontSize: 16,
  },
  cardPrice: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 5,
    color:'#40BFFF'
  },
  cardPriceOnRequest: {
    fontSize: 12,
    fontWeight: "300",
    color:'#40BFFF'
  },
  cardFooter: {
    height: 40,
    padding: 5,
    paddingRight: 10,
    display: "flex",
    flexDirection: "column",
  },
});
