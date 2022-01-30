import React from 'react';
import {
  FlatList,
} from 'react-native';
import StoryComponent from './StoryComponent';
const STORIES=require('./../../data/stories.json');


export default class StoryScreen extends React.Component {
  
  constructor(props: any,) {
    super(props);
   
    this.state = {
      isProcessing: true,
      stories: STORIES
    };
   
  }

  renderItem = ({ item }) => <StoryComponent stories={item} navigation={this.props.navigation} />;
  
  render() {
    return (
        <FlatList
              //initialNumToRender={7}
              showsVerticalScrollIndicator={false}
              data={this.state.stories}
              renderItem={this.renderItem}
              horizontal={false}
              style={{
                width: "100%",
               marginTop: 10,
              }}
             />
     );
  }
};