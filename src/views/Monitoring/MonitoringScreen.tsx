import { Colors, Custom, Typography } from "styles";
import React, { useEffect, useState } from "react";
import Style from "./Style";
import { 
  TouchableOpacity, 
  Text, 
  View, 
  Dimensions
} from "react-native";   

import SearchInput from "../../components/SearchInput/SearchInput"
import MonitoringList from "../../components/MonitoringList/MonitoringList" 
import AddNew from "assets/svg/AddNew.svg";  

//redux use
import { IAppState } from 'store/store'; 
import { useSelector, useDispatch} from 'react-redux';
import { CheckAction } from '../../actions/checkDataActions' 
 
interface monitoring { 
  navigation: any; // TODO use navigation props type
  route: any;
  newEmail: string;
}   
const MonitoringScreen = (props: monitoring) => {  
  const { width: ScreenWidth } = Dimensions.get("window"); 
  const dispatch = useDispatch();     
  const lCheckData = useSelector((state: IAppState) => state.checkDataState.checkData); 
  const [checkData, setCheckData] = useState(lCheckData == null ? [] : lCheckData);    
  
  const addMonitor = () =>{
    props.navigation.navigate("addMonitor", {data: checkData});
  } 

  return (
    <View style={Style.container}>
       <View style={Style.formView}>
        <Text style={Style.textStyle}>
          {'Monitoring'}  
        </Text>   
        {checkData.length == 0 && 
          <View style={Style.infoView}><Text style={Style.infoText}>
            {'You have not added any accounts to monitoring'}
          </Text></View>}
        {checkData.length > 0 && 
          <MonitoringList  
            getData={(data)=>{setCheckData(data)}}
        />}
        <TouchableOpacity style={Style.addNewStyle} onPress={addMonitor}>
          <AddNew/>
        </TouchableOpacity>
       </View>
    </View>
  );
};

export default MonitoringScreen
 