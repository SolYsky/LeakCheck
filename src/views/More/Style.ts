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
    justifyContent:'center',
    marginTop:screen_size.height / 6 - 60,
    height:screen_size.height / 6 * 3, 
  },

  textStyle: {  
     width:'100%',
     textAlign:'center',
     justifyContent:'center',
     paddingTop:32,
     paddingBottom:15,
     fontFamily:'Manrope',
     fontWeight:'600',
     fontSize:Typography.FONT_SIZE_16,  
     color:'#EBEBEB', 
     backgroundColor:'#292C31'
  }, 
  contentStyle: { 
    width:'100%',
    textAlign:'center',
    justifyContent:'center',
    fontFamily:'Manrope',
    fontWeight:'600',
    fontSize:Typography.FONT_SIZE_11_5,  
    color:'#EBEBEB',
    paddingBottom:40,
    lineHeight:19.57,
    backgroundColor:'#292C31'
 },
 reservedStyle: { 
    width:'100%',
    textAlign:'center',
    justifyContent:'center',
    fontFamily:'Manrope',
    fontWeight:'600',
    fontSize:Typography.FONT_SIZE_11_5,  
    color:'rgba(255,255,255,0.25)',
    paddingBottom:20,
    paddingTop:30,
    lineHeight:19.57, 
    backgroundColor:'#292C31'
  }, 
});

export default Styles;
