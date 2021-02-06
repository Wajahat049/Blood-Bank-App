import * as React from 'react';
import { View, Text,Button,FlatList,StyleSheet,SafeAreaView} from 'react-native';
import {SearchBar,Icon} from "react-native-elements";
import { useState,useEffect } from 'react';
import database from "@react-native-firebase/database";

function SearchDonor(){
  global.DATA=[]
  database().ref('/users').once("value").then(snapshot=>{
      var result = snapshot.val();
      // console.log(snapshot.val().json())
      // console.log(global.result)
      var z=Object.entries(result)
      for(var i=0;i<z.length;i++){
        global.DATA.push(z[i][1].user)
      // console.log("i want",z[i][1].user)
    } 
  })

  return global.DATA.map((element) => {
    return (

      <View  key={Math.random() * (100 - 1) + 1} style={{margin: 10,flex:1,backgroundColor:"red"}}>
        {console.log("lfhf",global.DATA)}
        <Text style={{color:"black",fontSize:10}}>{element}</Text>
      </View>
    );
  });
}
 
export default SearchDonor;