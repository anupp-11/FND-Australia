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
      },
      selectSize:{
        //borderColor:PRIMARY_TEXT_GRAY_COLOR, 
        borderRadius:10,
        padding:10,
        borderBottomWidth:1, 
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-end',
        height:62,
        flex:1
      }

});

export default styles;
