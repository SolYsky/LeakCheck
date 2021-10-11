import { StyleSheet } from "react-native";
import { Custom, Typography, Colors } from "styles";

const Styles = StyleSheet.create({
  container: { 
    width:'100%', 
  },
  formView: { 
    alignItems: "center", 
    width:'100%',
  },
  textStyle: { 
     height:22,
     fontFamily:'Manrope',
     fontWeight:'600',
     fontSize:Typography.FONT_SIZE_16,  
     color:'#EBEBEB',
     marginBottom:20,
  }, 
   
});

export default Styles;
