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
          <Image  source={require("../Images/searchIcon.png")} style={{ width: 110, height: 100, margin: 35, borderColor:'red',borderWidth:4 }} />
          <Text style={{color:"red",fontSize:20,textAlign:"center",marginTop:-15,fontWeight:"bold",marginBottom:20}}>SEARCH</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("BloodBank")}>
          <Image source={require("../Images/bloodBank.png")} style={{ width: 110, height: 100, margin: 35, borderColor:'red',borderWidth:4 }} />
          <Text style={{color:"red",fontSize:20,textAlign:"center",marginTop:-15,fontWeight:"bold",marginBottom:20}}>BLOOD BANKS</Text>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Profile")}>
          <Image source={require("../Images/profile.png")} style={{ width: 110, height: 100, margin: 35, borderColor:'red',borderWidth:4 }} />
          <Text style={{color:"red",fontSize:20,textAlign:"center",marginTop:-15,fontWeight:"bold",marginBottom:20}}>PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("BecomeDonor")}>
          <Image source={require("../Images/BloodDonor.png")} style={{ width: 110, height: 100, margin: 35, borderColor:'red',borderWidth:4 }} />
          <Text style={{color:"red",fontSize:20,textAlign:"center",marginTop:-15,fontWeight:"bold",marginBottom:20}}>DONOR</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          {/* <Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold',backgroundColor: "maroon", width:360, textAlign:'center',padding:20 }}>BLOOD BANK</Text> */}
          <Image source={require("../Images/mainpage2.jpg")} style={{ width:"100%", height: "57%"}} />
        </View>
      </View>
      
    );
  };

  export default Main;