import React from 'react';
import {Image, Text, Platform} from 'react-native';
import { View } from '../../Themed';
import Paragraph from '../../LoginComponents/Paragraph';
import styles from './styles';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import { HOURS, MINUTES } from '../../../service/utils';
import { theme } from '../../LoginComponents/theme';
import { TextInput } from 'react-native-paper';

export default class SleepDuration extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      hour: "",
      minute:""
    };
  }

  getHourPicker(){

    if(Platform.OS === "android"){
      return(
        <View
          style={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          borderWidth: 1.5,
          borderRadius: 10,
          borderColor: theme.colors.primary,
          height:40
      }}>
        <SelectPicker
                selectedValue={this.state.hour}
                style={{ width: 80, height:40,}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ hour: itemValue })
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
                width: 80, flex: 1,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderRadius: 10,
                //borderColor: PRIMARY_TEXT_GRAY_COLOR,
                marginTop: 10,
                height: 40
              }
            }}
            placeholder={{
              label:"Select Hour",
              value:null,
              color:theme.colors.primary
            }}
            value={this.state.hour}
            onValueChange={(itemValue, itemIndex) =>{
              
              this.setState({hour:itemValue})
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
  getMinutePicker(){

    if(Platform.OS === "android"){
      return(
        <View
          style={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          borderWidth: 1.5,
          borderRadius: 10,
          borderColor: theme.colors.primary,
          height:40
      }}>
        <SelectPicker
                selectedValue={this.state.minute}
                style={{ width: 80, height:40,}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ minute: itemValue })
                }
              >
                {MINUTES.map((x) => (
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
                width: 80, flex: 1,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderRadius: 10,
                //borderColor: PRIMARY_TEXT_GRAY_COLOR,
                marginTop: 10,
                height: 40
              }
            }}
            placeholder={{
              label:"Select Minutes",
              value:null,
              color:theme.colors.primary
            }}
            value={this.state.minute}
            onValueChange={(itemValue, itemIndex) =>{
              
              this.setState({minute:itemValue})
            }
              
            }
            items={MINUTES.map(x => {
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
          <View style = {{display : 'flex', alignItems:'center', marginBottom: 10}}>
            <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  
                }}
              >
              {this.getHourPicker()}
              <Text style={{fontSize:18,fontWeight:'700', marginHorizontal:5}}>HRS</Text>
              {this.getMinutePicker()}
              <Text style={{fontSize:18,fontWeight:'700', marginHorizontal:5}}>MIN</Text>
            </View>
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