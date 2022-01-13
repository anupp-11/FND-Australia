import React, { useState } from 'react';
import {Image, Text,FlatList, TextInput, Platform} from 'react-native';
import { View } from '../../Themed';
import Paragraph from '../../LoginComponents/Paragraph';
import styles from './styles';
import { Picker as SelectPicker, PickerIOS } from '@react-native-picker/picker';
//import RNPickerSelect from 'react-native-picker-select';
import { HOURS, MINUTES } from '../../../service/utils';
import { theme } from '../../LoginComponents/theme';

export default class SleepDuration  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes:'',
      hours:''
    };
  }
  getHourPicker(){

    if(Platform.OS === "android"){
      return(
        <View
          style={{
          display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:120,
         // borderWidth: 2,
          borderRadius: 10,
         // borderColor: 'gray',
          backgroundColor:'#E9E9E9',
          height:50,
          margin: 10
      }}>
        <SelectPicker
                selectedValue={this.state.hours}
                style={{ width: 60, flex: 1,textAlign:'center'}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ hours: itemValue })
                }
              >
                {HOURS.map((x) => (
                  <SelectPicker.Item key={x} label={x} value={x} />
                ))}
        </SelectPicker>
        <Text style={{marginRight:10,fontWeight:'700'}}>Hr</Text>
      </View>
      );
    }
    // else{
    //   return (
    //     <View style={styles.selectSize}>
    //       <RNPickerSelect
    //         style={{
    //           inputIOS:{
    //             //width: 150, flex: 1
    //             backgroundColor: '#fff',
    //             borderWidth: 1,
    //             borderRadius: 10,
    //             //borderColor: PRIMARY_TEXT_GRAY_COLOR,
    //             marginTop: 10,
    //             height: 40
    //           }
    //         }}
    //         // placeholder={{
    //         //   label:"Select State",
    //         //   value:null,
    //         //   color:PRIMARY_COLOR
    //         // }}
    //         value={this.state.hours}
    //         onValueChange={(itemValue, itemIndex) =>{
              
    //           this.setState({hours:itemValue})
    //         }
              
    //         }
    //         items={HOURS.map(x => {
    //           const sta ={
    //             label: x,
    //             value: x
    //           };
    //           return sta;
    //         })}
            
            
    //       />
    //     </View>

    //   )
    // }
  }
  getMinutePicker(){

    if(Platform.OS === "android"){
      return(
        <View
          style={{
          display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:120,
         
          borderRadius: 10,
          backgroundColor:'#E9E9E9',
          height:50,
          margin: 10
      }}>
        <SelectPicker
                selectedValue={this.state.minutes}
                style={{ width: 60, flex: 1,textAlign:'center'}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ minutes: itemValue })
                }
              >
                {MINUTES.map((x) => (
                  <SelectPicker.Item key={x} label={x} value={x} />
                ))}
        </SelectPicker>
        <Text style={{marginRight:10,fontWeight:'700'}}>Min</Text>
      </View>
      );
    }
    // else{
    //   return (
    //     <View style={styles.selectSize}>
    //       <RNPickerSelect
    //         style={{
    //           inputIOS:{
    //             //width: 150, flex: 1
    //             backgroundColor: '#fff',
    //             borderWidth: 1,
    //             borderRadius: 10,
    //             //borderColor: PRIMARY_TEXT_GRAY_COLOR,
    //             marginTop: 10,
    //             height: 40
    //           }
    //         }}
    //         // placeholder={{
    //         //   label:"Select State",
    //         //   value:null,
    //         //   color:PRIMARY_COLOR
    //         // }}
    //         value={this.state.minutes}
    //         onValueChange={(itemValue, itemIndex) =>{
              
    //           this.setState({minutes:itemValue})
    //         }
              
    //         }
    //         items={MINUTE.map(x => {
    //           const sta ={
    //             label: x,
    //             value: x
    //           };
    //           return sta;
    //         })}
            
            
    //       />
    //     </View>

    //   )
    // }
  }
  
  render(){
    return (
      <View style = {{backgroundColor:'white', borderRadius: 10, padding:10, marginBottom:20}}>
          <Paragraph> Sleep Duration </Paragraph>
          <Image
              style={{height: 150, width : '100%', borderRadius:10, marginBottom: 20 }}
              source={require('../../../assets/images/SleepDuration.png')}
            />
  
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent:'center'
            }}
          >
            {this.getHourPicker()}
            {this.getMinutePicker()}
            
          </View>
          
          <TextInput
            style={[
              styles.input,{
                height:100,
                paddingVertical:10,
                textAlignVertical:'top'
              },
            ]}
            multiline={true}
            placeholder={'Type Here'}
            />
          
      </View>
    );
  }
};

