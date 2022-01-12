import React, { useState } from 'react';
import {Image, Text,FlatList, TextInput, Platform} from 'react-native';
import { View } from '../../Themed';
import Paragraph from '../../LoginComponents/Paragraph';
import styles from './styles';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import { HOURS } from '../../../service/utils';

export default class SleepDuration  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes:'',
      hours:''
    };
  }
  getStatePicker(){

    if(Platform.OS === "android"){
      return(
        <View
          style={{
          //paddingVertical: 2,
          //backgroundColor: '#fff',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'gray',
          marginTop: 10
      }}>
        <SelectPicker
                selectedValue={this.state.hours}
                style={{ width: 150, flex: 1}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ hours: itemValue })
                }
              >
                {HOURS.map((x) => (
                  <SelectPicker.Item key={x} label={x} value={x} />
                ))}
        </SelectPicker>
      </View>
      );
    }else{
      return (
        <View style={styles.selectSize}>
          <RNPickerSelect
            style={{
              inputIOS:{
                //width: 150, flex: 1
                backgroundColor: '#fff',
                borderWidth: 1,
                borderRadius: 10,
                //borderColor: PRIMARY_TEXT_GRAY_COLOR,
                marginTop: 10,
                height: 40
              }
            }}
            // placeholder={{
            //   label:"Select State",
            //   value:null,
            //   color:PRIMARY_COLOR
            // }}
            value={this.state.hours}
            onValueChange={(itemValue, itemIndex) =>{
              
              this.setState({hours:itemValue})
            }
              
            }
            items={HOURS.map(x => {
              const sta ={
                label: x,
                value: x
              };
              return sta;
            })}
            
            
          />
        </View>

      )
    }
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
            }}
          >
            {this.getStatePicker()}
            <TextInput
              mode="flat"
              label="Zip Code*"
              value={this.state.zipCode}
              style={{  flex: 1 }}
              onChangeText={(value) => this.setState({ zipCode: value })}
            />
          </View>
          {/* <View style = {{display : 'flex', alignItems:'center', marginBottom: 10}}>
         
          </View> */}
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

