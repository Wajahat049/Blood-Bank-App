import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";


const Home = (props) => (
  <View style={styles.container}>
    <ImageBackground source={require("../Images/bg.jpg")} style={styles.image}>
      <Text onPress={()=>props.navigation.navigate("Login")} style={styles.text}>Login</Text>
      <Text onPress={()=>props.navigation.navigate("Signup")} style={styles.text}>SignUp</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height:'110%',
    width:'100%'
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "maroon",
    margin:20
  }
});

export default Home;