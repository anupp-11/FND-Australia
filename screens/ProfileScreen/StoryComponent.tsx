import React from "react";
import {
  StyleSheet, 
  Text,
  Image,
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

  renderImage(value){
    if(value=="1")
      return <Image style={{flex:1, width : "100%", borderRadius:5}} source={require('../../assets/images/stories/story1.png')}/>;
    else if(value=="2")
    return <Image style={{flex:1, width : "100%", borderRadius:5 }} source={require('../../assets/images/stories/story2.png')}/>;
    else if(value=="3")
    return <Image style={{flex:1, width : "100%", borderRadius:5 }} source={require('../../assets/images/stories/story3.png')}/>;
    else if(value=="4")
    return <Image style={{flex:1, width : "100%", borderRadius:5 }} source={require('../../assets/images/stories/story4.png')}/>;
    else if(value=="5")
    return <Image style={{flex:1, width : "100%", borderRadius:5 }} source={require('../../assets/images/stories/story5.png')}/>;
    else if(value == "6")
    return <Image style={{flex:1, width : "100%", borderRadius:5 }} source={require('../../assets/images/stories/story6.png')}/>;
  }
  
 

  render() {
    return (
        <ScrollView>
         <TouchableOpacity onPress={() => this.handleOnPress()}>
                <Card style={{height:310,margin:10}}>
                  {this.renderImage(this.state.story.imgurl)}
                  {/* <Card.Cover source={ this.state.img} style={{flex:1, width:'100%', }} /> */}
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
