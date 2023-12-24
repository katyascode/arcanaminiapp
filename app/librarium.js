import { View, Text, Button, StyleSheet } from 'react-native';
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const Librarium = () => {
    return (
        <View>
            <Text style={[styles.lgText]}>
                Librarium
            </Text>
        </View>
    )
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

export default Librarium;