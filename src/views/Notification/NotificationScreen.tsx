import { Colors, Custom, Typography } from "styles";
import React, { useEffect, useState } from "react";
import Style from "./Style";
import { 
  ScrollView, 
  Text, 
  View, 
  Dimensions
} from "react-native";   

import SearchInput from "../../components/SearchInput/SearchInput"
import NotifyList from "../../components/NotifyList/NotifyList"
import CompleteFlatList from 'react-native-complete-flatlist';

//redux use
import { IAppState } from 'store/store'; 
import { useSelector, useDispatch} from 'react-redux';
import { EmailAction } from '../../actions/checkDataActions' 
 
interface notifications { 
  navigation: any; // TODO use navigation props type
  route: any;
}   

const notificationScreen = ({navigation: {navigate}}: notifications) => {  
  const { width: ScreenWidth } = Dimensions.get("window"); 
  const dispatch = useDispatch();     
  const lEmails = useSelector((state: IAppState) => state.checkDataState.emails); 
  const lCheckData = useSelector((state: IAppState) => state.checkDataState.checkData);
  const [emails, setEmails] = useState(lEmails == null ? [] : lEmails);  
  const [datas, setDatas] = useState(lCheckData == null ? [] : lCheckData);  
  const [notifyData, setNotifyData] = useState(null);

  useEffect(() => {    
    setInterval(() => {
       checkNotifications();
      }, 1000);
  }, []);

  const checkNotifications=()=>{
    var detailString = ''; 
    // if(emails == undefined || emails.length == 0 || emails == null ){ 
    //   emails.map(item=>{
    //     detailString = detailString + ',' + item.data.name;
    //   })
    //   console.log('detailString', detailString)
    // }
    // else{
    //   emails.map(item=>{
    //     detailString = detailString + ',' + item.data.name;
    //   })
    //   console.log('detailString', detailString)
    // }
  }

  const onSearch = (searchText) => {
    
  }

  // const notifyData = [
  //   {name: '3 new leaks of your passwords', date: 'Today 8:29', details: 'the@leakcheck.net: LinkedIn,Fiverr\nwilliam@leakcheck.net: LinkedIn'}, 
  //   {name: '12 new leaks of your passwords', date: 'Yesterday 11:20', details: 'the@leakcheck.net: LinkedIn,Fiverr\nwilliam@leakcheck.net: LinkedIn'}, 
  //   {name: '2 new leaks of your passwords', date: '1 January 2021 22:57', details: 'the@leakcheck.net: LinkedIn,Fiverr\nwilliam@leakcheck.net: LinkedIn'}, 
  //   {name: '5 new leaks of your passwords', date: '19 August 2020 17:17', details: 'the@leakcheck.net: LinkedIn,Fiverr\nwilliam@leakcheck.net: LinkedIn'}, 
  // ];

  return (
    <View style={Style.container}>
       <View style={Style.formView}>
        <Text style={Style.textStyle}>
          {'Notifications'}  
        </Text>   
        <NotifyList
          notifyData={notifyData}
        />
       </View>
    </View>
  );
};

export default notificationScreen
 