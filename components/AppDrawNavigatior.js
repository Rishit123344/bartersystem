import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'
import SettingScreen from '../screens/SettingScreen'
import MyBarterScreen from '../screens/MyBarterScreen'

export const AppDrawNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    Setting:{screen:SettingScreen},
    MyBarters:{screen:MyBarterScreen},
},
{
    contentComponent:CustomSideBarMenu
},{intialRouteName:'HomeScreen'})