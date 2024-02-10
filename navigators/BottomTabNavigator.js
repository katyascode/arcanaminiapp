import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Calendar from "../screens/Calendar"
import Home from '../screens/Home';
import Librarium from '../screens/Librarium';
const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
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