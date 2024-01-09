import { View, Text, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import React from 'react-native';
import About from './pages/About';

const Home = () => {

    const alert = () => {
        console.log("works");
    }

    const router = useRouter();

    return (

        <View>
            <Text>Home</Text>
            {/*<Button title="Calender" onPress={() => router.push('/calender')}></Button>
            <About></About> */}
        </View>

    );
}

export default Home;