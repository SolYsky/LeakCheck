import { Colors, Custom, Typography } from "styles";
import React, { useEffect, useState } from "react"; 
import { useIsFocused } from '@react-navigation/core';
import Style from "./Style";
import { 
  ScrollView, 
  Text, 
  View, 
  Dimensions,
  BackHandler,
  Modal
} from "react-native";   

import SearchInput from "../../components/SearchInput/SearchInput"
import HomeList from "../../components/HomeList/HomeList" 
import YesNoModalViewScreen from "../../components/InfoModalWidgets/YesNoModalview"  

//redux use
import { IAppState } from 'store/store'; 
import { useSelector, useDispatch} from 'react-redux';
import { EmailAction } from '../../actions/checkDataActions' 
 
interface homes { 
  navigation: any; // TODO use navigation props type
  route: any;
}   

const homeScreen = ({ navigation, route }: homes) => {  
  const { width: ScreenWidth } = Dimensions.get("window"); 
  const [leakData, setLeakData] = useState(null);
  const dispatch = useDispatch();     
  //const lEmails = useSelector((state: IAppState) => state.checkDataState.emails); 
  const lCheckData = useSelector((state: IAppState) => state.checkDataState.checkData); 
  
  const [emails, setEmails] = useState(route.params == null ? [] : route.params.validEmail);  
  const [datas, setDatas] = useState(route.params == null ? [] : route.params.checkDatas);  
  const [dlgVisible, setDlgVisible] = useState(false);
  const isFocused = useIsFocused();
  
  useEffect(()=>{
    if(isFocused){
      setEmails(lCheckData);
      console.log("Focused: ", lCheckData); 

      navigation.addListener('beforeRemove', (e) => { 
        BackHandler.exitApp();
      });
    }
    
  }, [isFocused]);  

  const emailvalidate = (text) => { 
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct"); 
      return false;
    }
    else { 
      console.log("Email is Correct");
    }
    return true;
  }

  const onSearch = (email, searchText) => { 
    console.log('Onsearch calls');
    if(searchText != null){ 
      const savedDatas = datas.filter(item => item.email === email);   
      
      if(savedDatas != null && savedDatas.length != 0){ 
        const savedChecks = savedDatas.map(item => item.data);  
        let nameList = savedChecks.map(item => item.name);   
        let result = searchText.filter(item => (nameList.includes(item.name))); 
        console.log('result', result.length);
        setLeakData(searchText);
      }
      else{
        setLeakData(searchText);
        let saveDatas = searchText.map(item => ({email: email, data: item}));   
        console.log('saveDatas2', saveDatas.length)
        dispatch(EmailAction(saveDatas)); 
      }  
    }
    else{
      //alert("This email is not added!");
      console.log('Onsearch calls2');
      console.log('This email is not added!');
      setLeakData(searchText);
    }
    console.log('searchText', searchText)
  }

  const homeData = [
    {name: 'Adobe', date: 2015},
    {name: 'LinkedIn', date: 2011},
    {name: 'Google Corp', date: 2008},
    {name: 'LeakCheck', date: 2021},
    {name: 'Adobe', date: 2015}, 
  ];  

  return (
    <View style={Style.container}>
       <View style={Style.formView}>
        <SearchInput
          onChangeText={(email, text) => onSearch(email, text)}
          emails={emails}
          text={'onSearch'} 
        />  
        <HomeList
          homeData={leakData}
        />
       </View>
       <Modal
            animationType="slide"
            transparent={true}
            visible={dlgVisible}  
            onRequestClose={() => {
    
            }}  
            >
          <YesNoModalViewScreen 
              title={""}
              message={'Are you sure want to exist?'} 
              yes={"Yes"} 
              no={"No"} 
              handleYes={() => {
                  handleExit();
                  setDlgVisible(false);
              }}
              handleNo={() => {
                  setDlgVisible(false);
              }}
          /> 
        </Modal>
       
    </View>
  );
};

export default homeScreen
 