
import * as React from 'react';
import { View, Text, Button, TextInput,Image,ToastAndroid } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'



function Login(props) {
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@USER', jsonValue)
    } catch (e) {
      console.log("error")
      // saving error
    }
  }
  const [Name, setName] = useState("");
  const [pass, setPass] = useState("");
  var check;
  const retrieve_data=()=>{
    let user={
        Name,pass
  }
    database()
  .ref('/users/')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
    check=snapshot.val()
    if (user.Name in check){
      console.log("Successfully login");
      storeData(user)
      ToastAndroid.show("Successfully Login !", ToastAndroid.SHORT);
      props.navigation.navigate("Main");
    }
    else{
      console.log("Please signup first");
      ToastAndroid.show("Please Signup first !", ToastAndroid.LONG);
      props.navigation.navigate("Signup");
    }
  });


  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white",paddingTop:50 }}>
      <View>
        <Text style={{ fontSize: 50, color: 'red', fontWeight: 'bold' }}>Login</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 20 }}>
        <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 20 }}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>
      <View style={{ margin: 20, width: 110}}>
        <Button color="red" onPress={()=>retrieve_data()}  title="Login"></Button>
      </View>
      <View>
      <Image source={require('../Images/icon.png')}
      />
      </View>
    </View>
    
  );
}

export default Login;