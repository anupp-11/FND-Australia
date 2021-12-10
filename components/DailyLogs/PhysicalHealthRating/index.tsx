import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../../LoginComponents/Header';
import { theme } from '../../LoginComponents/theme';
import { Rating, AirbnbRating } from 'react-native-ratings';
class PhysicalHealthRating extends Component {
  constructor(props:any) {
    super(props);
    this.state = {rating : '0'};
  }
  ratingCompleted(rating:string) {
    //this.setState(rating);
    console.log("Rating is: " + rating);
  }
  render() {
    return (
      <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
        <Header> Physical Health Rating </Header>
         <View style = {{display : 'flex', alignItems:'center', marginBottom: 10}}>
        <Rating
           showRating
           onFinishRating={this.ratingCompleted}
           style={{ paddingVertical: 10 }}
        />
         </View>
        
    </View>
    );
  }
}

export default PhysicalHealthRating;



