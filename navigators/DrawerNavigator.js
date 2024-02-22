import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from "@react-navigation/drawer"
const Drawer = createDrawerNavigator();
import Login from '../screens/Login';
import Register from "../screens/Register"
import Profile from '../screens/Profile';
import BottomTabNavigator from './BottomTabNavigator';
import Logout from "../Modal/Logout"

const themeColor = "rgba(122, 134, 237, 1)"

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen component={BottomTabNavigator} name="Drawer" options={{
                drawerLabel: 'Menu',
                headerShown: false,
                drawerIcon: () => (
                    <Ionicons name="menu" size={24} color={themeColor}/>
                ),
            }}/>
            <Drawer.Screen  component={Profile} name="Profile" 
            options={{
                drawerLabel: 'Profile',
                headerShown: true,
                drawerIcon: () => (
                    <Ionicons name="person" size={24} color={themeColor}/>
                ),
            }}
             />
            <Drawer.Screen  component={Register} name="Register"
            options={{
                drawerLabel: 'Register',
                headerShown: true,
                drawerIcon: () => (
                    <Ionicons name="person-add" size={24} color={themeColor}/>
                ),
            }}
              />
            <Drawer.Screen  component={Login} name="Login"
            options={{
                drawerLabel: 'Login',
                headerShown: true,
                drawerIcon: () => (
                    <Ionicons name="log-in" size={24} color={themeColor}/>
                    ),

                }}
            />
            <Drawer.Screen component={Logout} name="Log Out"
            options={{
                drawerLabel: 'Signout',
                headerShown: true,
                drawerIcon: () => (
                    <Ionicons name="log-out" size={24} color={themeColor}/>
                ),
            }}
            />
        </Drawer.Navigator>
    )
}
 