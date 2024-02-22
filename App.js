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
import { store } from './store/store';
import { Provider } from 'react-redux';
import { login } from './store/authSlice';

// default purple theme colour, will add functionality to switch theme colour later
const themeColor = "rgba(122, 134, 237, 1)"

export default function App() {
    
    return (
        <Provider store={store}>
        <StatusBar style='dark' />
        <NavigationContainer>
            <DrawerNavigation/>
        </NavigationContainer>
        </Provider>
   
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
