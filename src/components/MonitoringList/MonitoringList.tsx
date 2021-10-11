import React, { ReactElement, useState } from "react";
import { 
  View,  
  FlatList,
} from "react-native"; 

import Style from "./Style";
import { Custom } from "../../styles"; 
import MonitoringItem from "./MonitoringItem/MonitoringItem" 
import { useStore } from "react-redux";

//redux use
import { IAppState } from 'store/store'; 
import { useSelector, useDispatch} from 'react-redux';
import { CheckAction } from '../../actions/checkDataActions' 

type MonitorProps = {  
  getData: Function;
};
 
const MonitoringList = ({  
  getData,
}: MonitorProps) => {  

  const dispatch = useDispatch();   
  const lCheckData = useSelector((state: IAppState) => state.checkDataState.checkData); 
  const [checkData, setCheckData] = useState(lCheckData == null ? [] : lCheckData);     
  
  const removeData =(index) =>{ 
    const tData = checkData.filter(item => item.email !== index);   
    setCheckData(tData); 
    getData(tData); 
    dispatch(CheckAction(tData));  
  }

  return (  
    <View style={Style.listStyle}>
      <FlatList  
        data={checkData != null && checkData != null ? checkData : null}
        renderItem={({ item, index }) => ( 
          <MonitoringItem
            data={item}  
            removeData={(index)=>{removeData(index)}}
          />
          )}
          keyExtractor={(item, index) => "key" + index}
      />  
      </View>
    );
};

export default MonitoringList;
