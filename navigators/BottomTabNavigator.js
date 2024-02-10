import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Calendar from "../screens/Calendar"
import Home from '../screens/Home';
import Librarium from '../screens/Librarium';
const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    return (
        <BottomTab.Navigator initialRouteName='Home' screenOptions={{
            tabBarActiveTintColor: "#7A86ED", // solidpurple shade from Figma
            tabBarInactiveTintColor:"gray",
            
        }}>
        <BottomTab.Screen name="Librarium" component={Librarium} options={
            {
                title: "Librarium",
                headerTitleAlign: "center",
                
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? "book" : "book-outline"} size={24} color={color}/>
                ),
            }
        }/>
        <BottomTab.Screen name="Home" component={Home} options={
            {
                title: "Home",
                headerTitleAlign: "center",
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
                ),
            }
        }/>
        <BottomTab.Screen name="Calendar" component={Calendar} options={
            {
                title: "Calendar",
                headerTitleAlign: "center",
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? "calendar-month" : "calendar-month-outline"} size={24} color={color}/>
                ),
            }
        }/>
</BottomTab.Navigator>
    )

}