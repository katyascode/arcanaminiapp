import { View, Text, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';

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