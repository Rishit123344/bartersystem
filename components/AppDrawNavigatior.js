import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'

export const AppDrawNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator}
},
{
    contentComponent:CustomSideBarMenu
},{intialRouteName:'Home'})