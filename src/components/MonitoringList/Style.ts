import { StyleSheet, Dimensions} from "react-native"; 
import { Colors, Custom, Typography } from "styles";
const screen_size = Dimensions.get("window");

const Styles = StyleSheet.create({
  listStyle:{
    width: screen_size.width - 40, 
    height: screen_size.height - 220,
    marginLeft:20,
    marginRight:20, 
  },
  labelStyles: {
    textTransform: "uppercase",
    color: "#62737E",
    zIndex: 100,
    fontWeight: "bold",
    fontSize: Typography.FONT_SIZE_10,    
    fontFamily:'Manrope',
  },
  containerStyles: {    
    backgroundColor: "#292C31",
    borderColor: "#292C31",
    borderRadius: 25, 
    zIndex: 1,
    height: 45,   
     
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
});

export default Styles;
