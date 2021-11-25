import React, {Children, Component} from 'react';
import { Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import { List } from 'react-native-paper';
import { PRIMARY_BACKGROUND_GRAY_COLOR, PRIMARY_DARK_COLOR, PRIMARY_TEXT_COLOR, PRIMARY_TEXT_GRAY_COLOR } from '../../../constants/Colors';
import { Category, getCategories, setCategoryTitle } from '../../../service/CategoryService';
import Accordian from './Accordian';


export default class CategoryDrawerListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isProcessing: true,
      searchValue: props.searchValue,
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

  parentCategoryClicked = async (item) => {
    await setCategoryTitle(item.name);
    this.props.navigation.navigate("CategoryScreen", {
      categoryId: item.id
    });
    
    }

  showSelectedCategory = async (item) => {
    
    await setCategoryTitle(item.name);
    this.props.navigation.navigate("CategoryScreen", {
      categoryId: item.id
    });
    }

   
  
  render() {
    return (
      <View style={styles.container}>
        <List.AccordionGroup  >
          {this.state.categories?.map((category) =>{
             return(
              <List.Accordion title= {category.name} titleStyle={styles.title} id={category.id} key={category.id}>
                <View style={{ display:'flex', alignSelf:'center', width: '95%', height: 1, backgroundColor: PRIMARY_DARK_COLOR }}/>
                <List.Item onPress = {this.parentCategoryClicked.bind(this,category)} titleStyle={styles.child} title={category.name} key={category.id}/>
              {
                 category.children?.map((child) =>{
                  return(
                      //{/* <View style={{ display:'flex', alignSelf:'center', width: '95%', height: 1, backgroundColor: '#000' }}/> */}
                      <List.Item onPress = {this.showSelectedCategory.bind(this,child)} title={child.name} titleStyle={styles.child} key={child.id}/>
                  );
                })
              }
            </List.Accordion>
             );
          })} 
        </List.AccordionGroup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   height:'100%',
   backgroundColor:PRIMARY_BACKGROUND_GRAY_COLOR

  },
  title :{
    fontSize: 16,
    fontWeight: '700',
    color: 'black'
    //color: PRIMARY_DARK_COLOR
  },
  child :{
    fontSize: 14,
    fontWeight: '500',
    color: PRIMARY_TEXT_GRAY_COLOR
  }
});