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
    top:screen_size.height / 5,     
  },

  textStyle: {  
     height:22,
     fontFamily:'Manrope',
     fontWeight:'600',
     fontSize:Typography.FONT_SIZE_16,  
     color:'#EBEBEB',
     marginBottom:20,
  }, 
  inputStyle: {
    width:screen_size.width - 40,
    backgroundColor: '#292C31',
    borderRadius: 25,
    marginLeft:20,
    marginRight:20,
    paddingHorizontal:20,
    fontFamily:'Manrope',
    fontWeight:'500',
    fontSize: Typography.FONT_SIZE_12,
    color:'#D7DBE2',
    top:10,
 },
 addButton:{
  justifyContent:'center',
  alignItems: "center",  
  width:screen_size.width - 40,
  height:45,
  marginLeft:20,
  marginRight:20,
  backgroundColor:'#5446F8',
  borderRadius: 25,
  marginTop:25,
 },
 buttonTextStyle:{
   
   fontFamily:'Manrope',
   fontWeight:'600',
   fontSize:Typography.FONT_SIZE_12,
   color:'white', 
 }
});

export default Styles;
