import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Calendar from "./screens/Calendar"
import Home from './screens/Home';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Librarium from './screens/Librarium';
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
import Login from "./screens/Login"
import Register from "./screens/Register"
import Profile from './screens/Profile';
function BottomTabNavigator(){
    return (
        <BottomTab.Navigator initialRouteName='lol' >
        <BottomTab.Screen name="Home" component={Home} options={
            {
                title: "Home",
                headerTitleAlign: "center",
                tabBarIcon: () => (
                    <Ionicons name="home" size={24} color={"purple"}/>
                ),
            }
        }/>
        <BottomTab.Screen name="Calendar" component={Calendar} options={
            {
                title: "Calendar",
                headerTitleAlign: "center",
                tabBarIcon: () => (
                    <Ionicons name="calendar" size={24} color={"purple"}/>
                ),
            }
        }/>
        <BottomTab.Screen name="Librarium" component={Librarium} options={
            {
                title: "Librarium",
                headerTitleAlign: "center",
                tabBarIcon: () => (
                    <Ionicons name="book" size={24} color={"purple"}/>
                ),
            }
        }/>
</BottomTab.Navigator>
    )

}
function DrawerNavigation(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen  component={BottomTabNavigator} name="Home" options={{
                headerShown: false
            }}/>
            <Drawer.Screen  component={Profile} name="My Profile"  />
            <Drawer.Screen  component={Register} name="Register"  />
            <Drawer.Screen  component={Login} name="Login"  />
        </Drawer.Navigator>
    )
}

export default function App() {
    
    return (<>
        <StatusBar style='dark'/>
        <NavigationContainer>
            <DrawerNavigation/>
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
