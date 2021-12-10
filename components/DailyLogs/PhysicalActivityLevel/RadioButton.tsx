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
    <View>
      {data.map((item) => {
        return (
            <View style = {{display : 'flex', alignItems:'center', marginBottom: 10, flexDirection :'row',justifyContent:'center'}}>
                <Pressable
                    style={
                    item.value === userOption ? styles.selected : styles.unselected 
                    }
                    onPress={() => selectHandler(item.value)}>
                    <Text style={styles.option}> {item.value}</Text>
                </Pressable>
            </View>
          
        );
      })}
    </View>
  );
}