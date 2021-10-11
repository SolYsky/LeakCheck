import React, { useEffect , useState } from "react"; 
import { 
  View,  
  TextInput
} from "react-native"; 

import Style from "./Style";
import { Custom } from "../../styles"; 
import RNTextInput from "@freakycoder/react-native-text-input";  

type InputProps = { 
  onChangeText: any; 
  text: any;   
  emails: any;
};

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

const SearchInput = ({ 
  onChangeText, 
  text,  
  emails,
}: InputProps) => {
  const url = 'https://leakcheck.net/api/public?key=ea0a7041a2f96da95853c893d77d2a158604d109&check=';
  const [emailText, setEmailText] = useState('example@example.com');  
  const [apiURL, setApiURL] = useState(url);  

  const onSearchEmail = async(text) =>{ 
    const findEmail = emails.filter(item => item.email === text);   
    console.log('emails', emails);
    console.log('findEmail',findEmail);
    if(findEmail == null || findEmail.length == 0 || !emailvalidate(text)){  
      onChangeText(null, null); 
      console.log('nulls', findEmail.length)
      return;
    }   
    setApiURL(url + text);
    let response = await fetch( url + text );
    try {
      let leakDatas = await response.json();  
      if(leakDatas != null && leakDatas.success){   
        onChangeText(text, leakDatas.sources);
      } 
    } catch (error) {
      
    }
    
  } 

  useEffect(() => {    
     
  }, []); 
  

  return ( 
    <View style={Style.container}>
      <RNTextInput
        disableButton={false}
        placeholder="the@leakcheck.net"
        onChangeText={(text: string) => onSearchEmail(text)}
        style={Style.textStyle} 
        placeholderTextColor={'#D7DBE299'}
        textInputStyle={Style.textInputStyle}
        buttonStyle={Style.buttonStyle}
        iconImageStyle={Style.iconImageStyle}  
      />
       </View>
    
  );
};

export default SearchInput;
