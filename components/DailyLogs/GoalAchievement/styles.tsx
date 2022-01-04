import {StyleSheet} from 'react-native';

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
      input :{
        width: '100%',
        height: 44,
        backgroundColor: '#f1f3f6',
        borderRadius: 6,
        paddingHorizontal : 10,
      }
});

export default styles;
