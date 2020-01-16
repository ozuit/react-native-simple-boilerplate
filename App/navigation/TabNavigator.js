import React  from "react";
import { createBottomTabNavigator } from "react-navigation";
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import * as screenNames from "./screen_names";

// Features
import Dashboard from "../containers/home/Dashboard";
import Notifications from "../containers/notify/Notify";
import Settings from "../containers/account/Profile";

export default createBottomTabNavigator(
  {
    [screenNames.APP]: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Trang chủ',
            tabBarIcon: ({ focused, tintColor }) => {
                return <IconEntypo name="home" size={25} color={tintColor} />;
            },
        },
    },
    
    [screenNames.NOTIFY]: {
        screen: Notifications,
        navigationOptions: {
            title: 'Thông báo',
            tabBarIcon: ({ focused, tintColor }) => {
                return <IconEntypo name="notification" size={25} color={tintColor} />;
            },
        },
    },
    
    [screenNames.SETTING]: {
        screen: Settings,
        navigationOptions: {
            title: 'Cá nhân',
            tabBarIcon: ({ focused, tintColor }) => {
                return <IconAntDesign name="setting" size={25} color={tintColor} />;
            },
        },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      
    }),
    tabBarOptions: {
      activeTintColor: '#4D4D4D',
      inactiveTintColor: 'gray',
    },
  }
);
