import React, { useRef } from "react";
import {
  StyleSheet, 
  Dimensions,
  View, Text, ScrollView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Image } from "react-native-elements";
import { theme } from "../../components/LoginComponents/theme";

let width = Dimensions.get("screen").width / 2;

export default class StoryInfoComponent extends React.Component{
    
  constructor(props) {
    super(props);
    
    debugger;
    this.state = {
   
    };
    debugger;

  }
  componentDidMount(){
     
  }

 
  render() {
    return (
      <ScrollView >
        <View style={{padding:10}}>

        <View style={{height:310}}>
        <Image style = {{flex:1, width:'100%',  }}
                  source={{uri: this.props.route.params.story.imgurl}}
              />
        </View>
          
          <Text style={{fontSize:18,fontWeight:'700',color:theme.colors.primary}}>{this.props.route.params.story.name}</Text>
         

          {(this.props.route.params.story.title1)?(<Text style={{marginTop:10,fontSize:18,fontWeight:'600',color:theme.colors.primary}}>{this.props.route.params.story?.title1}</Text>):(<View></View>)}
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t1p1}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t1p2}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t1p3}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t1p4}</Text>

          {(this.props.route.params.story.title2)?(<Text style={{marginTop:10,fontSize:18,fontWeight:'600',color:theme.colors.primary}}>{this.props.route.params.story?.title2}</Text>):(<View></View>)}
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t2p1}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t2p2}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t2p3}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t2p4}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t2p5}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t2p6}</Text>

          {(this.props.route.params.story.title3)?(<Text style={{marginTop:10,fontSize:18,fontWeight:'600',color:theme.colors.primary}}>{this.props.route.params.story?.title3}</Text>):(<View></View>)}
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t3p1}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t3p2}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t3p3}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t3p4}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t3p5}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t3p6}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t3p4}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t3p5}</Text>
          <Text style={{fontSize:16,lineHeight: 25,textAlign: 'justify'}}>{this.props.route.params.story?.t3p6}</Text>


        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    
    justifyContent: "space-between",
  },
  
});
