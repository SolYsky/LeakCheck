import { StyleSheet } from "react-native";
import { Colors, Custom, Typography } from "styles";

const Styles = StyleSheet.create({
  container: {   
     height:75,
     borderRadius: 25, 
     backgroundColor: '#292C31',
     width:'100%',   
     marginBottom:15,
     flexDirection: "row", 
     flex: 1,
  },  
  numberStyle:{
    fontSize:Typography.FONT_SIZE_12, 
    color:'rgba(215, 219, 226, 0.6)',
    width: '100%', 
    marginTop:5,
    marginLeft:24,
    fontFamily:'Manrope',
  },
  emailStyle:{
    fontSize:Typography.FONT_SIZE_14,
    fontWeight:'500', 
    color:'#D7DBE2',
    width: '100%', 
    marginTop:16,
    marginLeft:24,
    fontFamily:'Manrope',
  }, 
  iconStyle:{
    flex:0.1, 
    right:14, 
    justifyContent:'center',
    alignItems: "center", 
  }
});

export default Styles;
