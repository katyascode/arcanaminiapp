import { Stack } from 'expo-router';
import { Tabs } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";
import { useFonts } from "expo-font";

const Layout = () => {
    const [fontsLoaded, error] = useFonts({
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
        "AoboshiOne-Regular": require("../assets/fonts/AoboshiOne-Regular.ttf"),
        "SpaceGrotesk-Medium": require("../assets/fonts/GermaniaOne-Regular.ttf"),
      });
    
      if (!fontsLoaded && !error) {
        return null;
      }
    
    return (
        <Tabs>
            <Tabs.Screen
                name="calender"
                options={{
                    title: "Calender",
                    headerTitleAlign: "left",
                    fontSize: FontSize.size_lg,
                    tabBarIcon: () => (
                        <Ionicons name="calendar" size={30}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerTitleAlign: "left",
                    //tried using focus to get icon type to change
                    tabBarIcon: ( focused) => (
                        <Ionicons name={focused ? "home" : "home-outline"} size={30}/>
                    ),
                    headerRight: () => (
                        <Ionicons name="settings" size={30} />
                    )
                }}
            />
            <Tabs.Screen
                name="librarium"
                options={{
                    title: "Librarium",
                    headerTitleAlign: "left",
                    tabBarActiveTintColor: Color.purple,
                    tabBarIcon: () => (
                        <Ionicons name="book" size={30}/>
                    ),
                }}
            />
        </Tabs>
    )
}

export default Layout; 