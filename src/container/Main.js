import { AppRegistry, View } from 'react-native';
import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { Image, Button, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



function Main(props){
    return (

      <View style={{ backgroundColor: 'white' }}>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate("SearchDonor")}>
          <Image  source={require("../Images/searchIcon.png")} style={{ width: 100, height: 93, margin: 35, borderColor:'red',borderWidth:2 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("BloodBank")}>
          <Image source={require("../Images/bloodBank.png")} style={{ width: 100, height: 95, margin: 35, borderColor:'red',borderWidth:2 }} />
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Profile")}>
          <Image source={require("../Images/profile.png")} style={{ width: 100, height: 100, margin: 35, borderColor:'red',borderWidth:2 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("BecomeDonor")}>
          <Image source={require("../Images/BloodDonor.png")} style={{ width: 100, height: 90, margin: 35, borderColor:'red',borderWidth:2 }} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold',backgroundColor: "red", width:360, textAlign:'center', }}>BLOOD BANK</Text>
          <Image source={require("../Images/quote.png")} style={{ width: "100%", height: 210,}} />
        </View>
      </View>
    );
  };

  export default Main;