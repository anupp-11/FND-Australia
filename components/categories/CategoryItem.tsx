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
} from "../../constants/Colors";
import { setCategoryTitle } from "../../service/CategoryService";


let width = Dimensions.get("screen").width / 4;

export default class CategoryItem extends React.Component{
  constructor(props:any) {
    super(props);
    
    this.state = {
      category: props.category
    };

  }

  handleOnPress = async () => {
    //console.log("Pressed", this.state.category.id);
    await setCategoryTitle(this.state.category.name);
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
          }}
        >
          <View style={styles.cardHeaderView}>
            <View
              style={{
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Image
                style={{ resizeMode: "contain", width: width-10, height: 50 }}
                source={
                  this.state.category.images?.length > 0
                    ? { uri: this.state.category.images[0] }
                    : 
                    {
                        uri:
                          "https://image.flaticon.com/icons/png/512/1867/1867646.png",
                    }
                }
              />
            </View>

            <View style={styles.cardFooter}>
            <Text numberOfLines={2} style={styles.cardProductName}>
               {this.state.category.name}
            </Text>

            </View>
          </View>
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

  cardProductName: {
    alignSelf: "center",
    color:'#223263',
    marginTop:10,
    fontWeight:"700",
    marginBottom: 5,
    fontSize: 12,
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
