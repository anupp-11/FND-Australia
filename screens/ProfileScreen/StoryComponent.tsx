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
      stories: props.stories,
    };

  }
  componentDidMount(){
     
  }
  
 

  render() {
    return (
        <ScrollView>
         <TouchableOpacity onPress={()=>{}}>
                <Card style={{height:310}}>
                  <Card.Cover source={
                    this.state.stories?.imgurl
                      ? { uri: this.state.stories.imgurl }
                      : {
                          uri:
                            "https://image.freepik.com/free-vector/page-404-found-wire-with-socket_80328-233.jpg",
                        }
                  } style={{flex:1, width:'100%', resizeMode:"fit" }} />
                  <Card.Content>
                    <Title style={{marginTop:10}}>{this.state.stories.name}</Title>
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
