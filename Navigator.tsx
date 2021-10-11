import React, { ReactElement, useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  PermissionsAndroid,
  Image
} from "react-native"; 
import { Colors, Custom, Typography } from "styles";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

//Views
import homeScreen from './src/views/Home/HomeScreen';
import notifyScreen from './src/views/Notification/NotificationScreen';
import monitorScreen from './src/views/Monitoring/MonitoringScreen';
import AddMonitorScreen from './src/views/Monitoring/AddMonitor/AddMonitorScreen';
import MoreScreen from './src/views/More/MoreScreen';
import SplashScreen from './src/views/Splash/SplashScreen';

// svg
import HomeNor from "assets/svg/home_nor.svg";
import NotifyNor from "assets/svg/mail_nor.svg";
import MonitoringNor from "assets/svg/monitoring_nor.svg";
import MoreNor from "assets/svg/more_nor.svg";
import Home from "assets/svg/home.svg";
import Notify from "assets/svg/mail.svg";
import Monitoring from "assets/svg/monitoring.svg";
import More from "assets/svg/more.svg";
import LeakCheckLogo from "assets/svg/leakcheck.svg";
import BellOn from "assets/svg/bell.svg";
import Bell from "assets/svg/bellOn.svg";
import { useStore } from "react-redux";

//redux use
import { IAppState } from 'store/store'; 
import { useSelector, useDispatch} from 'react-redux'; 

const Navigator = ({route}) => {
  const Stack = createStackNavigator(); 
  return (  
      <NavigationContainer theme={MainTheme}> 
        <Stack.Navigator
          initialRouteName={"splash"}> 
          <Stack.Screen
              options={{ headerShown: false }}
              name="splash" 
              component={SplashScreen}
            />
          <Stack.Screen
            options={headerOptions}
            name="tab" 
            component={TabNavigator}
          />
        </Stack.Navigator> 
      </NavigationContainer>  

  );
};

const TabIcon = ({ icon, text, focused }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
      {icon}
      <Text
        style={{
          color: focused ? "#FFF" : "#62737E",
          fontSize: Typography.FONT_SIZE_10,
          marginTop: 10,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

const TabNavigator = ({route, navigation}) => {
  const Tab = createBottomTabNavigator();  
  global.tabs = Tab;   
  const lEmails = useSelector((state: IAppState) => state.checkDataState.checkData);  
  const lCheckDatas = useSelector((state: IAppState) => state.checkDataState.emails);
  const [validEmail, setValidEmail] = useState(lEmails == null ? [] : lEmails);   
  const [checkDatas, setCheckDatas] = useState(lCheckDatas == null ? [] : lCheckDatas);    

  const tabPressed = (data)=>{
    setValidEmail(lEmails);
    setCheckDatas(lCheckDatas);   
    console.log('validEmail', validEmail); 
  }
  
  return (
    <Tab.Navigator
      screenOptions={{ 
        tabBarShowLabel: false,  
        tabBarStyle: tabStyle,  
      }}
      backBehavior={'initialRoute'}
      initialRouteName="home"   
      screenListeners={{
        tabPress:tabPressed
      }}
    >
      <Tab.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              text=""
              focused={focused}
              icon={focused ? <Home/> : <HomeNor/>} 
            />
          ), 
          tabBarHideOnKeyboard: true,
          headerShown: false, 
        }}  
        initialParams={{validEmail: validEmail, checkDatas: checkDatas}} 
        component={HomeviewStackScreen}
      /> 
      <Tab.Screen
        name="notification"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              text=""
              focused={focused} 
              icon={focused ? <Notify/> : <NotifyNor/>}
            />
          ),
          tabBarHideOnKeyboard: true,
          headerShown: false
        }}
        component={notifyScreen}
      />
      <Tab.Screen
        name="monitoring"
        initialParams={{validEmail: validEmail}}
        options={{
          tabBarIcon: ({ focused }) => ( 
            <TabIcon 
              text=""
              focused={focused}
              icon={focused ? <Monitoring/> : <MonitoringNor/>}
            />
          ),
          tabBarHideOnKeyboard: true,
          headerShown: false
        }}
      >
      {() => <MonitorViewStackScreen route={route} />}
      </Tab.Screen>
      <Tab.Screen
        name="settings" 
        options={{ 
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              text=""
              focused={focused}
              icon={focused ? <More/> : <MoreNor/>} 
            />
          ),
          tabBarHideOnKeyboard: true,
          headerShown: false
        }} 
        component={MoreScreen}
      />
    </Tab.Navigator>
  );
};
   
const MonitorViewStackScreen = ({route}) => {
  const OverviewStack = createStackNavigator();  
  return (
    <OverviewStack.Navigator>
      <OverviewStack.Screen
        options={{ headerShown: false }}
        name="monitor" 
        initialParams={{route}}
        component={monitorScreen}
      />
      <OverviewStack.Screen
        options={{ headerShown: false }}
        name="addMonitor" 
        component={AddMonitorScreen}
      /> 
    </OverviewStack.Navigator>
  );
};


const HomeviewStackScreen = ({route}) => {
  const OverviewStack = createStackNavigator();  
  const [validEmail, setValidEmail] = useState(route.params == null ? [] : route.params.validEmail);   
  const [checkDatas, setCheckDatas] = useState(route.params == null ? [] : route.params.checkDatas);
  return (
    <OverviewStack.Navigator>
      <OverviewStack.Screen
        options={{ headerShown: false }}
        name="home1" 
        initialParams={{validEmail: validEmail, checkDatas: checkDatas}}
        component={homeScreen}
      />
      <OverviewStack.Screen
        options={{ headerShown: false }}
        name="home2" 
        component={homeScreen}
      /> 
    </OverviewStack.Navigator>
  );
};

const MainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#212529",
  },   
};

const authHeaderOptions = {
  headerStyle: {
    backgroundColor: "transparent",
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitle: "",
  headerLeft: () => <LeakCheckLogo />,
}; 

const nonHeaderOptions = {
  headerStyle: {
    backgroundColor: "transparent",
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitle: "", 
  headerLeft: "", 
}; 
  

const headerOptions = (navigation) => {
  return {
    headerStyle: {
      backgroundColor: "transparent",
      elevation: 0, 
      shadowOpacity: 0,   
      height: 90,   
    }, 
    headerLeft: () => {
      return null;
    },
    headerTitleAlign: 'center',  
    headerTitle: () => <LeakCheckLogo />,  
    headerRight: (navigation) => (
        <TouchableOpacity onPress={openNotification} style={{right:40}}>
          <Bell />
        </TouchableOpacity>
    ),
    right:20,  
  } 
};

const openNotification = (navigation) =>{
  console.log(global.tabs)
//   global.tabs.navigator.switchToTab({
//     tabIndex: 1,
//  });
} 

const tabStyle = {
  position: "absolute",  
  bottom: 0,
  left: 0,
  right: 0, 
  elevation: 0,
  borderTopRightRadius: 25,
  borderTopLeftRadius: 25,
  height: 60,
  backgroundColor: "#292C31",
  borderWidth: 0,
  borderColor: "#292C31", 
  borderTopColor:'#292C31'
};

const headingStyle = {
  fontSize: Typography.FONT_SIZE_28,
  fontWeight: Typography.FONT_WEIGHT_BOLD,
  color: Colors.WHITE, 
};

export default Navigator;
