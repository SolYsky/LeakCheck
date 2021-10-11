import { Colors, Custom, Typography } from "styles";
import React, { useEffect, useState } from "react";
import Style from "./Style";
import { 
  TouchableOpacity, 
  Text, 
  Image,
  View, 
  Dimensions,
} from "react-native";   
   
 // svg
import Logo from "assets/svg/Logo.svg";
import { CirclesLoader } from 'react-native-indicator';

interface splash { 
  navigation: any; // TODO use navigation props type
  route: any;
}   

const SplashScreen = ({navigation: navigate}: splash) => {  
  const { width: ScreenWidth } = Dimensions.get("window");  

  useEffect(() => {    
    setTimeout(() => {
      navigate.navigate('tab');
      }, 2000);
  }, []);

 

  return (
    <View style={Style.container}>
       <View style={Style.formView}>   
        <Image source={require('assets/imgs/splash.png')} style={Style.imageStyle} />
        <View style={Style.titleStyle}> 
          <Logo />
        </View>
        <View style={Style.loadingStyle}> 
          <CirclesLoader color={'white'} size={36} dotRadius={7}/>  
        </View>
       </View>
    </View>
  );
};

export default SplashScreen
 