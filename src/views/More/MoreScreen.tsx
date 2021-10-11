import { Colors, Custom, Typography } from "styles";
import React, { useEffect, useState } from "react";
import Style from "./Style";
import { 
  TouchableOpacity, 
  Text, 
  TextInput,
  View, 
  Dimensions,
} from "react-native";   
   
 
interface monitoring { 
  navigation: any; // TODO use navigation props type
  route: any;
}   

const AddMonitorScreen = ({navigation: {navigate}}: monitoring) => {  
  const { width: ScreenWidth } = Dimensions.get("window");  

  return (
    <View style={Style.container}>
       <View style={Style.formView}> 
          <Text style={Style.textStyle}>
            {'About Us'}  
          </Text>  
          <Text style={Style.contentStyle}>
            {'LeakCheck is a database search engine and password leaks prevention tool which helps you to always stay secure in the web. This app is a demo version of monitoring and search functionality.'}  
          </Text>
          <Text style={Style.contentStyle}>
            {'©️ 2018-2021 LeakCheck Security Services, Ltd. 2 Thomas More St, London, United Kingdom, E1W 1WY'}
          </Text>
          <Text style={Style.reservedStyle}>
            {'All rights reserved. Services are provided by registered company with number '}
            <Text style={{color:'#5446F8'}}>{'12101959'}</Text>
          </Text>
          
          
       </View>
    </View>
  );
};

export default AddMonitorScreen
 