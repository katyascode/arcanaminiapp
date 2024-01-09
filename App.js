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
    return (
        <NavigationContainer>
        <BottomTab.Navigator>
            <BottomTab.Screen name="Calendar" component={Calendar}/>
            <BottomTab.Screen name="Home" component={Home}/>
            <BottomTab.Screen name="Librarium" component={Librarium}/>
        </BottomTab.Navigator>
        </NavigationContainer>

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
