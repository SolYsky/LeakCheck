import React, { ReactElement } from "react";
import { 
  View,  
  FlatList,
} from "react-native"; 

import Style from "./Style";
import { Custom } from "../../styles"; 
import HomeItem from "./HomeItem/HomeItem"

type HomeProps = { 
  homeData: any;  
};
 
const HomeList = ({ 
  homeData,  
}: HomeProps) => {  
  return (  
    <View style={Style.listStyle}>
      <FlatList  
        data={homeData != null && homeData != null ? homeData : null}
        renderItem={({ item, index }) => ( 
          <HomeItem
            data={item}  
          />
          )}
          keyExtractor={(item, index) => "key" + index}
        />
      </View>
    );
};

export default HomeList;
