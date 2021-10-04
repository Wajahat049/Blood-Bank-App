import { Image, Button, Text, View } from 'react-native';
import * as React from 'react';
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from "@react-native-firebase/database";


function Profile(props) {
    
  const [Info,setInfo]=useState([])
  const [userDonor,setUserDonor]=useState("")
    useEffect(()=>{
    const getuserDonor = async () => {
          const jsonValue = await AsyncStorage.getItem('@LOGERDONOR');
          setUserDonor(JSON.parse(jsonValue))

      }
      getuserDonor()
  database().ref("/donors/"+userDonor+"/donor/").once('value').then(snapshot => {
  setInfo(snapshot.val())

  });})

  if ( Info==null || Info.Name==null){
      return(
      <View style={{ backgroundColor: 'maroon', width: "100%" }}>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', margin: 3, marginLeft: 15,padding:10 }}>
              please become a donor first
          </Text>
      </View>)
  }
    return (
        <View style={{ backgroundColor: 'maroon', width: "100%" }}>
            <Image source={require("../Images/profile.png")} style={{ width: "60%", height: 200, marginLeft: 60,marginBottom:100,marginTop:30 }} />
            <View style={{backgroundColor:'maroon',marginBottom:100,marginTop:-30}}>
                <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Name :   {Info.Name}</Text>
                <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Blood Group :   {(Info.blood)}</Text>
                <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Health Condition :   {(Info.health)}</Text>
                <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Email :  {(Info.email)}</Text>
                <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Contact :  {(Info.phone)}</Text>
                <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Gender :   {(Info.gender)}</Text>
                <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Address :  {(Info.address)}</Text>
            </View>
        </View>
    )
}

export default Profile
