import { Colors, Custom, Typography } from "styles";
import React, { useEffect, useState } from "react"; 
import Style from "./Style";
import { 
  TouchableOpacity, 
  Text, 
  TextInput,
  View, 
  Dimensions,
  Settings,
} from "react-native";   

//redux use
import { IAppState } from 'store/store'; 
import { useSelector, useDispatch} from 'react-redux';
import { CheckAction } from '../../../actions/checkDataActions' 
 
interface more { 
  navigation: any; // TODO use navigation props type
  route: any; 
}   

const MoreScreen = (props: more) => {  
  const dispatch = useDispatch();     
  const { width: ScreenWidth } = Dimensions.get("window");  
  const [emailText, setEmailText] = useState('');  

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

  const  handleSubmit = () => {
    if(emailvalidate(emailText)){  
      var tData = props.route.params.data; 
      const findEmail = tData.filter(item => item.email === emailText);   
      if(findEmail == [] || findEmail.length == 0){
        tData.push({email:emailText, number: 0});  
        dispatch(CheckAction(tData)); 
        props.navigation.navigate('monitor', {newEmail: emailText}); 
      } 
      else{
        alert("This email is already registered one");
      } 
    } 
    
  }
  
  return (
    <View style={Style.container}>
       <View style={Style.formView}> 
          <Text style={Style.textStyle}>
            {'Monitoring'}  
          </Text>  
          <TextInput
            value={emailText}
            onChangeText={(text) => setEmailText(text)}
            placeholderTextColor={'#444444'}
            style={Style.inputStyle}
          />    
          <TouchableOpacity
            activeOpacity={0.8}
            style={Style.addButton}
            onPress={handleSubmit}  
          >
            <Text style={Style.buttonTextStyle}>
              {'Add username'}
            </Text>
          </TouchableOpacity>
       </View>
    </View>
  );
};

export default MoreScreen
 