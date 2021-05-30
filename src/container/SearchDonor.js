import * as React from 'react';
import { View, Text,Button,FlatList,StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import {SearchBar,Icon} from "react-native-elements";
import { useState,useEffect } from 'react';
import database from "@react-native-firebase/database";

function SearchDonor(){
  const [search,setsearch]=useState("");
  const [newinfo,setnewinfo]=useState([]);

  global.DATA=[]
  global.NEWDATA=[]

  database().ref('/donors').once("value").then(snapshot=>{
      var result = snapshot.val();
      var lst1=Object.values(result)
      for(var i=0;i<lst1.length;i++){
        global.DATA.push(lst1[i].donor)
      }
      // console.log(global.DATA)
  for(var i=1;i<global.DATA.length;i++){
    if(search==global.DATA[i].blood){
      // console.log(global.DATA[i])
      global.NEWDATA.push(global.DATA[i])
    }
  }
  setnewinfo(global.NEWDATA)
  // console.log("scslc",setnewinfo)


  })
 
  return(
    <ScrollView >
      <SearchBar round lightTheme="true" style={{color:"maroon",fontSize:18,fontWeight:"bold"}}
       placeholder="Type any blood group here like AB+"
       onChangeText={(search)=>setsearch(search)}
       value={search} />
      {
        newinfo.map((element)=>{
          return(
             <View key={Math.random() * (100 - 1) + 1} style={{margin: 10,padding:10, flex:1,backgroundColor:"maroon",}}>
        <Text style={{color:"white",fontSize:20}}>NAME:    {element.Name}</Text>
        <Text style={{color:"white",fontSize:20}}>PHONE:   {(element.phone)}</Text>
        <Text style={{color:"white",fontSize:20}}>BLOOD:   {(element.blood)}</Text>
        <Text style={{color:"white",fontSize:20}}>HEALTH:  {(element.health)}</Text>
        <Text style={{color:"white",fontSize:20}}>ADDRESS: {(element.address)}</Text>
        <Text style={{color:"white",fontSize:20}}>EMAIL:   {(element.email)}</Text>
      </View>)
          
        })
      }
      </ScrollView>
  )
}
 
export default SearchDonor;