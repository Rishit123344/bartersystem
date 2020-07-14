import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet,TextInput,Image,KeyboardAvoidingView, Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class SignupLoginScreen extends React.Component{
    constructor(){
        super();
        this.setState({
            emailID:'',
            password:''
        })
    }
    userlogin=(emailID,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailID,password)
        .then(()=>{
            return Alert.alert("Login Sucessful")
        })
        .catch((error)=>{
    var errorcode = error.code
    var errorMessage = error.errorMessage
    return Alert.alert(errorMessage)
        })
    }
    userSignUp=(emailID,password,confirmPassword)=>{
      if(password!==confirmPassword){
        return(
          Alert.alert("Password does not match")
        )
      }else{
        firebase.auth().createUserWithEmailAndPassword(emailID,password)
        .then(()=>{
            return Alert.alert("User Added Sucessfully")
        })
        .catch((error)=>{
    var errorcode = error.code
    var errorMessage = error.errorMessage
    return Alert.alert(errorMessage)
        })
    }
    }  
            render(){
                return(
                    <View style={styles.container }>
                        <View style={styles.profileContainer}>
                        <View>
                <Image source={require("../assets/barter.png")}style={{width:200,height:200}}/><Text style={{textAlign:'center',fontSize:30}}>Barter System</Text>
            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                        <TextInput style={styles.loginBox}placeholder="abc@example.com"placeholderTextColor='#ffff' keyboardType='email-address'onChangeText={(text)=>{this.setState({
                                emailID:text
                            })}}></TextInput>
                             <TextInput style={styles.loginBox}placeholder="Password"placeholderTextColor='#ffff' secureTextEntry={true} onChangeText={(text)=>{this.setState({
                                password:text
                            })}}></TextInput>
                            <TouchableOpacity style={[styles.button,{marginTop:20,marginBottom:20}]}onPress={()=>{this.userlogin(this.state.emailID,this.state.password)}}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                );
            }
            }
    const styles = StyleSheet.create({
        container:{
          flex:1,
          backgroundColor:'#FFDEAD'
        },
        profileContainer:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
        },
        loginBox:{
          width: 300,
          height: 40,
          borderBottomWidth: 1.5,
          borderColor : '#ff8a65',
          fontSize: 20,
          margin:10,
          paddingLeft:10
        },
        button:{
          width:300,
          height:50,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:25,
          backgroundColor:"white",
          shadowColor: "#000",
          shadowOffset: {
             width: 0,
             height: 8,
          },
          shadowOpacity: 0.30,
          shadowRadius: 10.32,
          elevation: 16,
        },
        buttonText:{
          color:'black',
          fontWeight:'200',
          fontSize:20
        },
        buttonContainer:{
            flex:1,
            alignItems:'center'
          }
      })
      