import React, { ReactElement, useState } from "react";
import { 
  View,  
  Text,
  TouchableOpacity,
} from "react-native"; 

import Style from "./Style";
import { Custom } from "../../../styles";   
import Trash from "assets/svg/Trash.svg";

type ItemProps = { 
  data: any;  
  removeData: Function;
};

const MonitoringItem = ({ 
  data,  removeData
}: ItemProps) => {  

  return (   
       <View style={Style.container}>  
        <View style={{flex:0.9}}>
          <Text style={Style.emailStyle}>
            {data.email}
          </Text>
          <Text style={Style.numberStyle}>
            {'Amount of leaks: ' + data.number}
          </Text>  
        </View>
        <TouchableOpacity style={Style.iconStyle} onPress={()=>removeData(data.email)}>
          <Trash />
        </TouchableOpacity>  
      </View>
  );
};

export default MonitoringItem;
