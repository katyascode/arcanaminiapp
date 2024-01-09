import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { Tabs } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native"
import Calendar from "./screens/Calendar"
import Home from './screens/Home';
import Librarium from './screens/Librarium';

export default function App() {
    const BottomTab = createBottomTabNavigator();
    return (<>
        <StatusBar style='dark'/>
        <NavigationContainer>
        <BottomTab.Navigator initialRouteName='Home'>
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
