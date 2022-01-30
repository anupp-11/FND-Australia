import React from "react";
import {
  StyleSheet, 
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Card, List, Title } from "react-native-paper";



export default class StoryComponent extends React.Component{
    
  constructor(props) {
    super(props);
    
    debugger;
    this.state = {
      story: props.stories,
      img : props.stories.imgurl
    };

  }
  componentDidMount(){
     console.log("Image paths:",this.state.img);
  }
  handleOnPress (){
    
    this.props.navigation.navigate("Story", {
      story: this.state.story,
    });
   
  }
  
 

  render() {
    return (
        <ScrollView>
         <TouchableOpacity onPress={() => this.handleOnPress()}>
                <Card style={{height:310}}>
                  <Card.Cover source={ this.state.img} style={{flex:1, width:'100%', }} />
                  <Card.Content>
                    <Title style={{marginTop:10}}>{this.state.story.name}</Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
        </ScrollView>
   
    );
  }
}


const styles = StyleSheet.create({
  row: {
    
    justifyContent: "space-between",
  },
  
});
