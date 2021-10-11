import { StyleSheet, Dimensions} from "react-native"; 
import { Custom, Typography, Colors } from "styles";

const screen_size = Dimensions.get("window");


const Styles = StyleSheet.create({
  container: { 
    width:'100%',  
    height:'100%'
  },
  formView: { 
    alignItems: "center",  
    width:'100%',
    height:'100%',
    justifyContent:'center', 
  },
  imageStyle:{
    width:'100%',
    height:'100%',
  },
  titleStyle:{
    position:'absolute', 
  },
  loadingStyle:{
    bottom:85
  }
});

export default Styles;
