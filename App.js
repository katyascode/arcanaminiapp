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
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { GermaniaOne_400Regular } from '@expo-google-fonts/germania-one'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import DrawerNavigation from './navigators/DrawerNavigator';
import { useFonts } from "expo-font";

// default purple theme colour, will add functionality to switch theme colour later
const themeColor = "rgba(122, 134, 237, 1)"

export default function App() {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

//Code for loading fronts -Jasper

// const [fontsLoaded, error] = useFonts({
//     "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
//     "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
//     "AoboshiOne-Regular": require("./assets/fonts/AoboshiOne-Regular.ttf"),
//     "SpaceGrotesk-Medium": require("./assets/fonts/SpaceGrotesk-Medium.ttf"),
// });

// if (!fontsLoaded && !error) {
//     return null;
// }
