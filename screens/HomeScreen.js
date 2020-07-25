import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet,TextInput,Image,KeyboardAvoidingView, Alert,ScrollView,Modal} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            itemName:'',
            reasonToRequest:''
             }
    }
    submitForm=async()=>{
        db.collection("User").add({
          'itemName' : this.state.itemName,
          'Description' : this.state.reasonToRequest,
        })
        this.setState({
            userId:firebase.auth().currentUser.email,
          itemName:'',
          reasonToRequest:''
        })
        return(
            Alert.alert("Book Requested Successfully")
        )
    }
    render(){
        return(
            <KeyboardAvoidingView style={styles.KeyboardStyles}>
                <Text style={{fontSize:100}}>Exchange Screen</Text>
            <View style={{flex:1}}>
                    <TextInput style={styles.formtextinput} placeholder={"Enter item Name"}onChangeText={(text)=>{this.setState({
                        itemName:text
                    })}}value={this.state.itemName}></TextInput>
                     <TextInput style={styles.formtextinput} placeholder={"Reason For The Book"}onChangeText={(text)=>{this.setState({
                        reasonToRequest:text
                    })}}value={this.state.reasonToRequest}multiline numberOfLines={8}></TextInput>
            
                           </View>
             <TouchableOpacity onPress={async()=>{
                var userUser = await this.submitForm()
              }}style={styles.button}><Text>Add Item</Text>
              </TouchableOpacity>
              </KeyboardAvoidingView>
        )
    }
    }
    const styles = StyleSheet.create({
        KeyboardStyles:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        formtextinput:{
            width:'100%',
            height:50,
            alignSelf:'center',
            borderColor:'#FFAB91',
            borderRadius:10,
            borderWidth:1,
            marginTop:90,
      padding:10
          },
          button:{
            width:300,
            height:50,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:25,
            backgroundColor:"#ff9800",
            shadowColor: "#000",
            shadowOffset: {
               width: 0,
               height: 8,
            },
            shadowOpacity: 0.30,
            shadowRadius: 10.32,
            elevation: 16,
          },
    })