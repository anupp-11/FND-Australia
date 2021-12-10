import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    page: {
      paddingHorizontal :10,
      marginBottom: 20
        //padding: 20,
      },
      root: {
        marginTop:10,
        
        
        fontSize: 18,
        color:'#223263'
      },
      container: {
        display : 'flex',
        flexDirection : 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop : 20,
        paddingHorizontal : 20,
        marginBottom: 20
      },
      Txtcontainer: {
        display : 'flex',
        flexDirection : 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal : 15,
        marginBottom: 10
      },
      imgContainer : {
          //position : 'relative',
          textAlign: 'center',
          height:150
      },
      image : {
        height: 150, 
        width : '100%', 
        borderRadius:10, 
        marginBottom: 20 
      },
      centerText : {
        fontSize: 80,
        fontWeight:'700',
        color: 'white',
        
        
      }
});

export default styles;
