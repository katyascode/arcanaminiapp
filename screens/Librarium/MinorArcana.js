import { View, Text, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';

const MinorArcana = () => {

    const alert = () => {
        console.log("works");
    }

    const router = useRouter();

    return (

        <View>
            <Text>Minor Arcana</Text>
        </View>

    );
}

export default MinorArcana;