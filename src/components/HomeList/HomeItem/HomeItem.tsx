import React, { ReactElement } from "react";
import { 
  View,  
  Text,
} from "react-native"; 

import Style from "./Style";
import { Custom } from "../../../styles";  

type ItemProps = { 
  data: any;  
};

const HomeItem = ({ 
  data,  
}: ItemProps) => {  
  return (  
     <View style={Style.container}>
       <Text style={Style.nameStyle}>
        {data.name}
       </Text>
       <Text style={Style.dateStyle}>
        {'Breach date: ' + data.date}
       </Text> 
     </View>
  );
};

export default HomeItem;
