import React, { useState } from 'react';
import { View, Image, Pressable } from 'react-native';
import styles from './styles';

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };

  const renderMood = (value)=>{
    if(value=="1")
      return <Image style={{height: 50, width : 50, borderRadius:10,}} source={require('../../../assets/emojis/sad.png')}/>;
    else if(value=="2")
    return <Image style={{height: 50, width : 50, borderRadius:10 }} source={require('../../../assets/emojis/angry.png')}/>;
    else if(value=="3")
    return <Image style={{height: 50, width : 50, borderRadius:10 }} source={require('../../../assets/emojis/numb.png')}/>;
    else if(value=="4")
    return <Image style={{height: 50, width : 50, borderRadius:10 }} source={require('../../../assets/emojis/happy.png')}/>;
    else if(value=="5")
    return <Image style={{height: 50, width : 50, borderRadius:10 }} source={require('../../../assets/emojis/vhappy.png')}/>;

  }

  return (
    <View style={{display : 'flex',flexDirection :'row',width:'100%',justifyContent:'space-around',alignItems:'center',  }}>
      {data.map((item) => {
        return (
            <View style = {{marginBottom: 10, }}>
                <Pressable
                    style={
                    item.value === userOption ? styles.selected : styles.unselected 
                    }
                    onPress={() => selectHandler(item.value)}>
                    {/* <Text style={item.value === userOption ? styles.selectedOption : styles.unselectedOption }> {item.value}</Text> */}
                    <View >
                      {renderMood(item.value)}
                    </View>
                </Pressable>
            </View>
          
        );
      })}
    </View>
  );
}