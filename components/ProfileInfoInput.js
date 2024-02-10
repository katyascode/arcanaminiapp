{ /* 
    Component: ProfileInfoInput
    Responsible for: 
        * The blocks that allow text input for user name, email and password in the onboarding flow 
*/ }

import { StyleSheet, View, Text, TextInput } from 'react-native';

const ProfileInfoInput = ({inputTitle}) => {
    return (
        <View style={styles.inputBox}>
          <Text style={styles.inputTitle}>{inputTitle}</Text>
        </View>
      );
};

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#FFF',
        padding: 30,
        borderRadius: 20, 
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 16,
        gap: 12,
    },

    inputTitle: { // Title in the input boxes 
        fontFamily: 'Nunito',
        fontSize: 14,
        color: '#7A7775' // grey70
        },

    inputText: { // User text input formatting
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#6A6764' // grey80
    }

});

export default ProfileInfoInput;