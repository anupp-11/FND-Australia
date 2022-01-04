import {StyleSheet} from 'react-native';
import { theme } from '../../LoginComponents/theme';

const styles = StyleSheet.create({
    page: {
        padding: 10,
      },
      root: {
        marginTop:10,
        
        
        fontSize: 18,
        color:'#223263'
      },
      container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
      },
      selectedOption: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight:'700'
      },
      unselectedOption: {
        fontSize: 18,
        color: theme.colors.primary,
        textAlign: 'center',
      },
      unselected: {
        backgroundColor: 'white',
        borderWidth : 2,
        borderColor : theme.colors.primary,
        margin: 5,
        paddingVertical: 5,
        borderRadius: 20,
        width:100
        //paddingHorizontal:10,
      },
      selected: {
        color: 'white',
        backgroundColor: theme.colors.primary,
        margin: 5,
        paddingVertical: 5,
        borderWidth : 2,
        borderColor : "gray",
        borderRadius: 20,
        width:100
      },
});

export default styles;
