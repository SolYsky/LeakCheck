import React, { ReactElement } from "react";
import { 
  View,  
  FlatList, 
} from "react-native"; 

import Style from "./Style";
import { Custom } from "../../styles"; 
import NotifyItem from "./NotifyItem/NotifyItem" 

type HomeProps = { 
  notifyData: any;  
};
 
const NotifyList = ({ 
  notifyData,  
}: HomeProps) => {  
  return (  
    <View style={Style.listStyle}>  
      <FlatList  
        data={notifyData != null && notifyData != null ? notifyData : null}
        renderItem={({ item, index }) => ( 
          <NotifyItem
            data={item}  
          />
          )}
          keyExtractor={(item, index) => "key" + index}
        />
      </View>
    );
};

export default NotifyList;
