import React, { useCallback, useRef, useState } from 'react';
import {
  FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import VideoComponent from './VideoComponent';



export default class MediaScreen extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      isProcessing: true,
      videos: [
        "lcLYqYjO69c",
        "tFx7tokRbu8",
        "yE8sbxP7694",
        "u52rcsud5LE",
        "68HpOgWWUrk",
        "ikXC0A57L0k",
        "FKXUWDlf-UE",
        "9hcBxyrqu7s"
      ],
      

    };
   
  }
  componentDidMount(){
    
  }
 

  renderItem = ({ item }) => <VideoComponent video={item} navigation={this.props.navigation} />;
  headerComponent = () =>{
    return(
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Appbar.Content title="Media"/>
    </Appbar.Header>
    );
  }
  render() {
    return (
        <FlatList
                ListHeaderComponent = {this.headerComponent()}
               initialNumToRender={7}
               showsVerticalScrollIndicator={false}
               data={this.state.videos}
               renderItem={this.renderItem}
               columnWrapperStyle={{ justifyContent: "space-around" }}
               horizontal={false}
               numColumns={2}
               style={{
                width: "100%",
                marginTop: 35,
               }}
             />
     );
  }
};