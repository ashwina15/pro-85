import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import loginScreen from "./loginScreen"
import registerScreen from "./registerScreen"
imort* as firebase from "./firebase"
import{firebaseConfig} from "/config"
if(!firebase.apps.length){
  firebase.initialliseApp(firebaseConfig)
 
}
else{firebase.app()};
const stack=createStackNavigator();

const StackNev=()=>{
  return(
    <Stack.Navigator initiallRouteName= "login" screenOptions={{
      headerShown: false, 
      gestureEnabled: false 

    }}>
      <Stack.Screen name="login"component={loginScreen}/>
      <Stack.Screen name="register"component={registerScreen}/>
      <Stack.Screen name="dashboard"component={dashboardScreen}/>
</Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}