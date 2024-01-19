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
import Librarium from './screens/Librarium';
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
import Login from "./screens/Login"
import Register from "./screens/Register"
import Profile from './screens/Profile';

import { useFonts } from "expo-font";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { GermaniaOne_400Regular } from '@expo-google-fonts/germania-one'

// default purple theme colour, will add functionality to switch theme colour later
const themeColor = "rgba(122, 134, 237, 1)"

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator 
            initialRouteName='Home' 
            screenOptions={{
                tabBarActiveTintColor: themeColor,
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    height: 96,
                },
                headerTitleAlign: "left",
                headerStyle: {
                    height: 156,
                },
            }}
        >
            <BottomTab.Screen name="Librarium" component={Librarium} options={
                {
                    title: "Librarium",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "book" : "book-outline"} size={24} color={color} />
                    ),
                }
            } />
            <BottomTab.Screen name="Home" component={Home} options={
                {
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
                    ),
                }
            } />
            <BottomTab.Screen name="Calendar" component={Calendar} options={
                {
                    title: "Calendar",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name={focused ? "calendar-month" : "calendar-month-outline"} size={24} color={color} />
                    ),
                }
            } />
        </BottomTab.Navigator>
    )

}
function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen component={BottomTabNavigator} name="Drawer" options={{
                drawerLabel: 'Menu',
                headerShown: false,
                drawerIcon: () => (
                    <Ionicons name="menu" size={24} color={"purple"} />
                ),
            }} />
            <Drawer.Screen component={Profile} name="Profile"
                options={{
                    drawerLabel: 'Profile',
                    headerShown: true,
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={"purple"} />
                    ),
                }}
            />
            <Drawer.Screen component={Register} name="Register"
                options={{
                    drawerLabel: 'Register',
                    headerShown: true,
                    drawerIcon: () => (
                        <Ionicons name="person-add" size={24} color={"purple"} />
                    ),
                }}
            />
            <Drawer.Screen component={Login} name="Login"
                options={{
                    drawerLabel: 'Login',
                    headerShown: true,
                    drawerIcon: () => (
                        <Ionicons name="log-in" size={24} color={"purple"} />
                    ),

                }}
            />
        </Drawer.Navigator>
    )
}

export default function App() {
    return (<>
        <StatusBar style='dark' />
        <NavigationContainer>
            <DrawerNavigation />
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
