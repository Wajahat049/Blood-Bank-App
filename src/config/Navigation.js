import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../container/Home";
import Signup from "../container/Signup";
import Login from "../container/Login";
import Main from "../container/Main";
import Profile from "../container/Profile";
import BecomeDonor from "../container/BecomeDonor";
import SearchDonor from "../container/SearchDonor";
import BloodBank from "../container/BloodBanks";







const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"Home"}} />
        <Stack.Screen name="Signup" component={Signup} options={{title:"Signup"}} />
        <Stack.Screen name="Main" component={Main} options={{title:"Main"}} />
         <Stack.Screen name="Login" component={Login} options={{title:"Login"}} />
        <Stack.Screen name="Profile" component={Profile} options={{title:"Profile"}} />
        <Stack.Screen name="SearchDonor" component={SearchDonor} options={{title:"SearchDonor"}} />
        <Stack.Screen name="BecomeDonor" component={BecomeDonor} options={{title:"BecomeDonor"}} />
        <Stack.Screen name="BloodBank" component={BloodBank} options={{title:"BloodBank"}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;