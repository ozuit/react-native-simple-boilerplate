import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginContainer from '../containers/login/LoginContainer';
import Splash from '../containers/other/Splash';
import * as screenNames from "./screen_names";

import App from "./TabNavigator";
import HeaderComponent from "./HeaderComponent";

const navigationOptions = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: '#4D4D4D',
        marginTop: Platform.OS === 'ios' ? -10 : 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'normal',
    },
    gesturesEnabled: false, 
    headerTitle: <HeaderComponent navigation={navigation}/>
});

const AppStackNavigator = createStackNavigator(
    {
        [screenNames.SPLASH]: {
            screen: Splash,
            navigationOptions: { header: null, gesturesEnabled: false, },
        },
        [screenNames.LOGIN]: {
            screen: LoginContainer,
            navigationOptions: { header: null, gesturesEnabled: false, },
        },
        [screenNames.APP]: {
            screen: App,
            navigationOptions
        },
    }, {
        initialRouteName: screenNames.SPLASH,
    })

export default createAppContainer(AppStackNavigator)