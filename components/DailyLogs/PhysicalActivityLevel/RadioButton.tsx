import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
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
                    <Text style={item.value === userOption ? styles.selectedOption : styles.unselectedOption }> {item.value}</Text>
                </Pressable>
            </View>
          
        );
      })}
    </View>
  );
}