import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Calendar from "./screens/Calendar"
import Home from './screens/Home';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Librarium from './screens/Librarium/Librarium';
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
import Login from "./screens/Login"
import Register from "./screens/Register"
import Profile from './screens/Profile';
import { useFonts } from "expo-font";
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import DrawerNavigation from './navigators/DrawerNavigator';

// default purple theme colour, will add functionality to switch theme colour later
const themeColor = "rgba(122, 134, 237, 1)"

export default function App() {
    //Loading fonts - Jasper
    const [fontsLoaded, error] = useFonts({
        "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
        "AoboshiOne-Regular": require("./assets/fonts/AoboshiOne-Regular.ttf"),
        "GermaniaOne-Regular": require("./assets/fonts/GermaniaOne-Regular.ttf"),
      });
    
      if (!fontsLoaded && !error) {
        return null;
      }

    const [user, setUser] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(FIREBASE_AUTH, (user)=>{
            console.log(user);
            setUser(user);
        })
       
    })
    return (<>
        <StatusBar style='dark' />
        <NavigationContainer>
            <DrawerNavigation  user={user}/>

        </NavigationContainer>
    </>
    );
}
