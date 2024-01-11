import { Stack } from 'expo-router';
import { Tabs } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear } from '@fortawesome/free-solid-svg-icons';

{ /* This file is responsible for the layout of different pages UI */ }

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="calender"
                options={{
                    title: "Calendar",
                    headerTitleAlign: "center",
                    tabBarIcon: () => (
                        <Ionicons name="calendar" />
                    ),
                    headerRight: () => (
                        <Ionicons name="settings" />
                    )
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerTitleAlign: "center",
                    tabBarIcon: () => (
                        <Ionicons name="home" />
                    ),
                    headerRight: () => (
                        <Ionicons name="settings" />
                    )
                }}
            />
            <Tabs.Screen
                name="librarium"
                options={{
                    title: "Librarium",
                    headerTitleAlign: "center",
                    tabBarIcon: () => (
                        <Ionicons name="book" />
                    ),
                    headerRight: () => (
                        <Ionicons name="settings" />
                    )
                }}
            />
        </Tabs>
    )
}

export default Layout; 