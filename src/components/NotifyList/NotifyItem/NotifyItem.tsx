import React, { ReactElement, useState } from "react";
import { 
  View,  
  Text,
  TouchableOpacity,
} from "react-native"; 

import Style from "./Style";
import { Custom } from "../../../styles";  
import ArrowDown from "assets/svg/ArrowUp.svg";
import ArrowUp from "assets/svg/ArrowDown.svg";

type ItemProps = { 
  data: any;  
};

const NotifyItem = ({ 
  data,  
}: ItemProps) => { 
  
  const [open, toggleOpen] = useState(false);

  return (   
       <TouchableOpacity style={open ? Style.containerExpand : Style.container} onPress={() => toggleOpen(!open)}>  
        <View style={{flex:0.9}}>
          <Text style={Style.dateStyle}>
            {data.date}
          </Text>
          <Text style={Style.nameStyle}>
            {data.name}
          </Text> 
          {open ? (
            <View>
              <Text style={Style.explainStyle}>
                {'Were detected new entries for your accounts:'}
              </Text>
              <Text style={Style.detailsStyle}>
              {data.details}
            </Text>
          </View>
          ): null}
        </View>
        <View style={Style.iconStyle}>
          {open ? <ArrowUp /> : <ArrowDown />}
        </View> 
       
       </TouchableOpacity>
  );
};

export default NotifyItem;
