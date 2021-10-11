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
  containerExpand: {   
    height:149,
    borderRadius: 25, 
    backgroundColor: '#292C31',
    width:'100%',   
    marginBottom:15,
    flexDirection: "row", 
    flex: 1,
 }, 
  nameStyle:{
    fontSize:Typography.FONT_SIZE_12,
    fontWeight:'500', 
    color:'#ffffff',
    width: '100%', 
    marginTop:10,
    marginLeft:24,
    fontFamily:'Manrope',
  },
  dateStyle:{
    fontSize:Typography.FONT_SIZE_10,
    fontWeight:'400', 
    color:'rgba(255,255,255,0.5)',
    width: '100%', 
    marginTop:18,
    marginLeft:24,
    fontFamily:'Manrope',
  },
  detailsStyle:{
    fontSize:Typography.FONT_SIZE_10,
    lineHeight: 18.15, 
    color:'#ffffff',
    width: '100%', 
    marginTop:8,
    marginLeft:24,
    fontFamily:'Manrope',
  },
  explainStyle:{
    fontSize:Typography.FONT_SIZE_10,
    lineHeight: 18.15,
    fontWeight:'400', 
    color:'rgba(255,255,255,0.5)',
    width: '100%', 
    marginTop:8,
    marginLeft:24,
    fontFamily:'Manrope',
  },
  iconStyle:{
    flex:0.1, 
    right:14, 
    top:35,
    alignItems: "center", 
  }
});

export default Styles;
