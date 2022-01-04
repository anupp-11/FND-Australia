import React, { useRef } from "react";
import {
  StyleSheet, 
  Dimensions,
  View, Text
} from "react-native";
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";


let width = Dimensions.get("screen").width / 2;

export default class VideoComponent extends React.Component{
    
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
    debugger;
    this.state = {
      video: props.video,
      title : ''
    };

  }
  componentDidMount(){
      debugger;
    getYoutubeMeta(this.state.video).then(meta => {
      this.setState({title : meta.title}) 
    });
    debugger;
  }
  
 

  render() {
    return (
        
        <View
          style={{
            padding: 10,
          }}
        >
            <YoutubePlayer
            ref={this.playerRef}
            height={width/2}
            width={width-10}
            videoId={this.state.video}
            
        />
        <Text numberOfLines={2} style={{width: width-10, fontWeight:'600',  }}>{this.state.title}</Text>
        </View>
   
    );
  }
}


const styles = StyleSheet.create({
  row: {
    
    justifyContent: "space-between",
  },
  
});
