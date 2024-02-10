import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from "@react-navigation/drawer"
const Drawer = createDrawerNavigator();
import Login from '../screens/Login';
import Register from "../screens/Register"
import Profile from '../screens/Profile';
import BottomTabNavigator from './DrawerNavigation';

export default function DrawerNavigation({user}){
    return(
        <Drawer.Navigator>
            <Drawer.Screen  component={BottomTabNavigator} name="Drawer" options={{
                drawerLabel: 'Menu',
                headerShown: false,
                drawerIcon: () => (
                    <Ionicons name="menu" size={24} color={"#7A86ED"}/>
                ),
            }}/>
            <Drawer.Screen  component={Profile} name="Profile" 
            options={{
                drawerLabel: 'Profile',
                headerShown: true,
                drawerIcon: () => (
                    <Ionicons name="person" size={24} color={"#7A86ED"}/>
                ),
            }}
             />
             {
                user ? ( <>
                <Drawer.Screen  component={Register} name="Register"
                options={{
                    drawerLabel: 'Register',
                    headerShown: true,
                    drawerIcon: () => (
                        <Ionicons name="person-add" size={24} color={"#7A86ED"}/>
                    ),
                }}
                  />
                <Drawer.Screen  component={Login} name="Login"
                options={{
                    drawerLabel: 'Login',
                    headerShown: true,
                    drawerIcon: () => (
                        <Ionicons name="log-in" size={24} color={"#7A86ED"}/>
                    ),
    
                }}  
                /></>): <Drawer.Screen  component={Login} name="Logout"
                options={{
                    drawerLabel: 'Login',
                    headerShown: true,
                    drawerIcon: () => (
                        <Ionicons name="log-out-outline" size={24} color={"#7A86ED"}/>
                    ),
                }}  
                />
             }
           
        </Drawer.Navigator>
    )
}