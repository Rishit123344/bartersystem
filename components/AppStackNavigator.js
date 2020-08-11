import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import ExchangeScreen from '../screens/BookDonateScreen'
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen'

export default class AppStackNavigator extends React.Component{
    constructor(props){
        super(props)
        this.state(
            itemsDonateList={screen:ExchangeScreen}
        )
    }
}