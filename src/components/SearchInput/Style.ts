 
import { StyleSheet, Dimensions} from "react-native"; 
import { Colors, Custom, Typography } from "styles";
const screen_size = Dimensions.get("window");

const Styles = StyleSheet.create({
  container:{
    width: screen_size.width - 40,
    marginLeft:20,
    marginRight:20
  },
  labelStyles: {
    textTransform: "uppercase",
    color: "#62737E",
    zIndex: 100,
    fontWeight: "bold",
    fontSize: Typography.FONT_SIZE_10,    
    fontFamily:'Manrope',
  },
  textStyle: {    
    width:'100%',
    backgroundColor: "#292C31",
    borderColor: "#292C31",
    borderRadius: 25, 
    zIndex: 1,
    height: 45,    
    marginBottom:20,
  },
  buttonStyle:{
    backgroundColor: "#292C31",
    borderColor: "#292C31",
    borderRadius: 25, 
    zIndex: 1,
    height: 45, 
  },
  iconImageStyle:{
    width:13,
    height:13
  },
  textInputStyle: {
    fontSize: Typography.FONT_SIZE_12,
    fontWeight:"500",
    color:'#D7DBE2',
    lineHeight:16.8,
    fontFamily:'Manrope',
  },
});

export default Styles;
