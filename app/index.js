import { View, Text, Button } from 'react-native';
import React from 'react-native'; 
import About from './pages/About';

const Home = () => {

    const alert =() => {
        console.log("works");
    }


    return (

        <View>
        <Text>hello world</Text>
        <Button title="Click Me" onPress={alert}>Click me</Button>
        {/* <About></About> */}
        </View>

    );
}

export default Home;