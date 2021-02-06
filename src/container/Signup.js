import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import {Picker} from "@react-native-picker/picker";


function Signup(props) {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [blood, setBlood] = useState("");
  const save_data=()=>{
    let user={
        Name, email , pass , phone , blood
    }
    database().ref(`/users/${user.Name}`).update({user})
  }
  props.navigation.navigate("Login")

    
  
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{ fontSize: 50, color: 'red', fontWeight: 'bold',marginBottom:10 }}>SignUp</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 10 }}>
        <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{borderWidth:3,borderColor:"red",width:"80%", margin:10}}>
        <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder="Email"/>
      </View>
      <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 10 }}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>
      <View style={{borderWidth:3,borderColor:"red",width:"80%", margin:10}}>
        <TextInput  value={phone} onChangeText={(e)=>setPhone(e)} placeholder="Phone Number"/>
      </View>
      <View style={{borderWidth:3,borderColor:"red"}}>
      <Picker
        selectedValue={blood}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setBlood(itemValue)}>
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B-" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
      </Picker>
      </View>
    <View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "red" style={{fontSize:30}} onPress={()=>save_data()} title="Signup"></Button>
      </View>
    </View>
    
    </View>
  );
}

export default Signup;