import { View, Text, Button, StyleSheet} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const Home = () => {

    const alert = () => {
        console.log("works");
    }

    const router = useRouter();

    return (

        <View>
            <Text style={[styles.test]}>Home</Text>
            {/*<Button title="Calender" onPress={() => router.push('/calender')}></Button>
            <About></About> */}
        </View>

    );
}

const styles = StyleSheet.create({
    test: {
        color: Color.darkGrey,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        fontFamily: FontFamily.germaniaOneRegular,
      },
});

export default Home;