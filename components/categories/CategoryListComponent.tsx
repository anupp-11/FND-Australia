import {
    StyleSheet,
    Image,
    View,
    FlatList,
    TouchableHighlight,
    Text,
    Dimensions,
  } from "react-native";
  import * as React from "react";
  import {
    getProductsForAccount,
    Product,
  } from "../../service/ProductService";
  import {
    getCategories,
    Category,
    setCategoryTitle,
  } from "../../service/CategoryService";
  import AppProgressBar from "../ProgressBar";
  import { Card, Button, Icon } from "react-native-elements";
  import { PRIMARY_BACKGROUND_GRAY_COLOR } from "../../constants/Colors";
  import CategoryItem from "./CategoryItem";
  let width = Dimensions.get("screen").width / 2;
  
  export default class CategoryListComponent extends React.Component {
    constructor(props: any) {
      super(props);
     
      this.state = {
        isProcessing: true,
        searchValue: props.searchValue
  
      };
      if (props.searchValue) {
        
      }
  
      
     
    }
    getCategoriesAsync = async () =>{
     
      let categories = await getCategories(this.state.searchValue,false);
      this.setState({ categories: categories });
      this.setState({ isProcessing: false });
     
    }
  
    componentDidMount = async () => {
      await this.getCategoriesAsync();
    };
  
  
    openProduct = async(item: Category) => {
      console.log("Pressed :", item)
      // await setCategoryTitle(item.name);
      // this.props.navigation.navigate("CategoryScreen", {
      //   categoryId: item.categoryId
      // });
    }
  
    renderItem = ({ item }) => <CategoryItem category={item} navigation={this.props.navigation} />;
  
    render() {
     
      if (this.state.isProcessing) {
        return (
          <View style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center', height : 150,  backgroundColor:PRIMARY_BACKGROUND_GRAY_COLOR}}>
            <AppProgressBar />
          </View>
        );
      } else {
        return (
          <View style = {styles.container}>
          <Text style = {styles.title}> Categories </Text>
          <FlatList
            horizontal
            initialNumToRender={7}
            showsHorizontalScrollIndicator={false}
            data={this.state.categories}
            renderItem={this.renderItem}
            keyExtractor={(item: Category, index) => index.toString()}
            style={{
              backgroundColor: PRIMARY_BACKGROUND_GRAY_COLOR,
              width: "100%",
              marginBottom: 10,
            }}
          />
          </View>
  
          
        );
      }
    }
  }
  
  const styles = StyleSheet.create({
    container:{
      backgroundColor: PRIMARY_BACKGROUND_GRAY_COLOR,
      width: "100%",
      //marginBottom: 10,
    },
    row: {
      justifyContent: "space-between",
    },
    cardHeaderView: {
      flex: 0.5,
      width: width,
  
      padding: 5,
      paddingBottom: 10,
    },
    title: {
      color:'#223263',
      marginTop: 5,
      fontSize:15,
      fontWeight: "600"
    },
    cardImage: {
      resizeMode: "center",
      padding: 0,
    },
    cardProductName: {
      marginBottom: 5,
      marginTop: 10,
      fontSize: 13,
      padding: 5,
    },
    cardPrice: {
      marginTop: 2,
      fontSize: 18,
      fontWeight: "700",
      paddingBottom: 5,
    },
    cardPriceOnRequest: {
      fontSize: 10,
      fontWeight: "300",
    },
    cardFooter: {
      height: 80,
    },
  });
  