import React,{Component} from 'react'
import {Header,Icon,Badge} from 'react-native-elements'
import {Text,View,StyleSheet,Alert,} from 'react-native'
import db from '../config'

export default class MyHeader extends Component{
    constructor(props){
        super(props)
this.state={
    value:''
}
    }
    getnumberofunreadnotifications(){
        db.collection("all_notifications").where("notification_status",'==','unread')
        .onSnapShot((snapShot)=>{
            var unreadnotifications = snapShot.docs.map((doc)=>{doc.data()})
            this.setState({
                value:unreadnotifications.length
            })
        })
    }
    componentDidMount(){
        this.getnumberofunreadnotifications()
    }
    belliconwithbadge = ()=>{
        return(
            <View>
                <Icon name='bell' type='font-awesome'color='#696969'size={25}onPress={this.props.navigation.navigate('Notification')}></Icon>
                <Badge value={this.state.value}containerStyle={{position:'absilute',top:-4,right:-4}}></Badge>
            </View>
        )
    }
    render(){
        return(
            <Header leftComponent={<Icon name='bars'type='font-awesome'color='#696969'onPress={()=>{this.props.navigation.toggleDrawer()}}></Icon>}
            centerComponent = {{text:this.props.title,style:{color:'#90A5A9',fontSize:20,fontWeight:'bold'}}}
            rightComponent = {<this.belliconwithbadge{...this.props}/>}
            backgroundColor = '#EAFAfE' ></Header>
        )
    }
}