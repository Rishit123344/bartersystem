import React from 'react'
import {Text,View,TextInput,TouchableOpacity,FlatList,StyleSheet} from 'react-native'
import db from '../config'
import firebase from 'firebase'

export default class ExchangeScreen extends React.Component{
    constructor(props){
        super(props);
this.state = {
    allitems:[],
    search:'',
    lastVisibleItems:null
}
    }
    searchItems=async(text)=>{
 var enteredText = text.split("")
var text = text.toUpperCase()
if(enteredText[0].toUpperCase()==='B'){
    const Items = await db.collection("User").where("itemName",'==',text).get()
    Items.docs.map((doc)=>{
        this.setState({
            allitems:[...this.state.allitems,doc.data()],
            lastVisibleItems:doc
        })
    })
}

    }
    fetchMoreItems=async()=>{
        var text = this.state.search.toUpperCase()
        var enteredText = text.split("")
        if(enteredText[0].toUpperCase()==='B'){
            const User = await db.collection("User").where("itemName",'==',text).startAfter(this.state.lastVisibleItems).limit(10).get()
            User.docs.map((doc)=>{
                this.setState({
                    allitems:[...this.state.allitems,doc.data()],
                    lastVisibleItems:doc
                })
            })
        }
            }
    componentDidMount=async()=>{
          const query = await db.collection("User").limit(10).get(
              query.docs.map((doc)=>{
                  this.setState({
                     allitems:[],
                     lastVisibleItems:doc
                  })
              })
          )
      }
   
      render(){
        return(
          
        <View style={styles.container}>
        <View style={styles.searchbar}>
            <TextInput style={styles.bar}placeholder="Enter Item Name"onChangeText={(text)=>{this.setState({
                search:text
                        })}}></TextInput>
            <TouchableOpacity style={styles.searchbutton}onPress={()=>{
                this.searchItems(this.state.search)
            }}>
                <Text>Search</Text>
            </TouchableOpacity>
            </View>
<FlatList data={this.state.allitems}
renderItem={({item})=>(
<View style={{borderBottomWidth:2}}>
<Text>{'item Name:'+item.itemName}</Text>
<Text>{'Description:'+item.Description}</Text>
</View>
)} keyExtractor={(item,index)=>index.toString()} onEndReached={this.fetchMoreItems} onEndReachedThreshold={0.7}> 
</FlatList>
</View>
);
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    searchbar:{
flexDirection:'row',
height:40,
width:'auto',
borderWidth:0.5,
alignItems:'center',
backgroundColor:'white',
    },
    bar:{
borderWidth:2,
height:30,
width:300,
paddingLeft:10
    },
    searchbutton:{
        borderWidth:1,
        height:30,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
    }
})

