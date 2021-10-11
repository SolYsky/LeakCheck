import { StyleSheet } from "react-native";
import { Colors, Custom, Typography } from "styles";

const Styles = StyleSheet.create({
  container: {   
     height:75,
     borderRadius: 25, 
     backgroundColor: '#292C31',
     width:'100%',   
     marginBottom:10
  }, 
  nameStyle:{
    fontSize:Typography.FONT_SIZE_14,
    fontWeight:'500',
    lineHeight:19.6,
    color:'#D7DBE2',
    width: '100%', 
    marginTop:18,
    marginLeft:24,
    fontFamily:'Manrope',
  },
  dateStyle:{
    fontSize:Typography.FONT_SIZE_12, 
    fontWeight:'400',
    lineHeight:16.8,
    color:'#D7DBE299',
    width: '100%', 
    marginTop:4,
    marginLeft:24,
    fontFamily:'Manrope',
  },
});

export default Styles;
