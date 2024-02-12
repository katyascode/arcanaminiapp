import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Calendar from "../screens/Calendar"
import Home from '../screens/Home';
import Librarium from '../screens/Librarium/Librarium.js';
const BottomTab = createBottomTabNavigator();

const themeColor = "rgba(122, 134, 237, 1)"

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator 
            initialRouteName='Home' 
            screenOptions={{
                tabBarActiveTintColor: "purple",
                tabBarInactiveTintColor: "gray",
                headerTitleAlign: "center",
                
            }}
        >
            <BottomTab.Screen name="Librarium" component={Librarium} options={
                {
                    title: "Librarium",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "book" : "book-outline"} size={24} color={themeColor} />
                    ),
                }
            } />
            <BottomTab.Screen name="Home" component={Home} options={
                {
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "home" : "home-outline"} size={24} color={themeColor} />
                    ),
                }
            } />
            <BottomTab.Screen name="Calendar" component={Calendar} options={
                {
                    title: "Calendar",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name={focused ? "calendar-month" : "calendar-month-outline"} size={24} color={themeColor} />
                    ),
                }
            } />
        </BottomTab.Navigator>
    )

}