import { StyleSheet, Text, View } from 'react-native';
import ProfileInfoInput from './components/ProfileInfoInput';

const Intro1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.header}>Account details</Text>
                    <View style={styles.items}>
                    { /* This is where the input components will go */}
                        <ProfileInfoInput inputTitle="What can we call you?"></ProfileInfoInput>
                    </View>
            </View>
        </View>
    );
}

export default Intro1; 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F2F2F1',
      },
      
      wrapper: {
        paddingTop: 150,
        paddingHorizontal: 32,
      },
    
      header: {
        fontSize: 32,
        fontFamily: 'Optima',
        fontWeight: '400',
        textAlign: 'center'
      },
    
      items: {
        marginTop: 16,
      },
    
      input: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }

});