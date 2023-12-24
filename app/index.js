import { View, Text, Button, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import React from 'react-native';
import About from './pages/About';
import { ScrollView } from 'react-native-gesture-handler';
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";



const Home = () => {

    const alert = () => {
        console.log("works");
    }

    const router = useRouter();

    return (
        
        <View>
            <ScrollView>
                <View style={[styles.bodyContainer]}>
                    <Text style={[styles.lgText]}>Recent Readings</Text>
                    {/*<Button title="Calender" onPress={() => router.push('/calender')}></Button>
                    <About></About> */}
                </View>
            
            </ScrollView>
            
        </View>

    );
}

const styles = StyleSheet.create({
    bodyContainer: {
        padding: Padding.p_16
    },
    lgText: {
        fontSize: FontSize.size_lg,
        textAlign: "left",
        color: Color.black,
        fontFamily: FontFamily.nunitoRegular
    }

});

export default Home;