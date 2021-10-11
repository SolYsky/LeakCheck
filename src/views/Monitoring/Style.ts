import { StyleSheet, Dimensions} from "react-native"; 
import { Custom, Typography, Colors } from "styles";

const screen_size = Dimensions.get("window");


const Styles = StyleSheet.create({
  container: { 
    width:'100%', 
  },
  formView: { 
    alignItems: "center", 
    width:'100%',
    height: screen_size.height - 150, 
  },
  textStyle: { 
     height:22,
     fontFamily:'Manrope',
     fontWeight:'600',
     fontSize:Typography.FONT_SIZE_16,  
     color:'#EBEBEB',
     marginBottom:20,
  }, 
  infoView: { 
    alignItems: "center", 
    justifyContent:'center',
    height:screen_size.height - 200,  
 }, 
  infoText: { 
    height:80,
    fontFamily:'Manrope',
    fontWeight:'600',
    textAlign:'center', 
    fontSize:Typography.FONT_SIZE_14,  
    color:'#D7DBE2',
    marginHorizontal:66,
    marginBottom:20,
    lineHeight:25,
 }, 
  addNewStyle: {
    position:'absolute',
    width:45,
    height:45,
    right: 20,
    bottom:60,
    zIndex:1,
 },
   
});

export default Styles;
