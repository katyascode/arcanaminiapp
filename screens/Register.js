import { createUserWithEmailAndPassword } from "firebase/auth";
import { ActivityIndicator, StyleSheet, TextInput,Button, View, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";

function Register({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    
    const register = async()=>{
        setLoading(true);
        try{
            console.log(email);
            console.log(password);
            const response = await createUserWithEmailAndPassword(auth,email, password);
            console.log(response)
        }catch(error){
            console.log(error);
        }
        setLoading(false);
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behaviour="padding">
            <TextInput style={styles.input} placeholderTextColor="#524b4a"  value={email} placeholder="Email" autoCapitalize="none" onChangeText={(text)=>setEmail(text)}></TextInput>
            <TextInput style={styles.input}  placeholderTextColor="#524b4a" secureTextEntry={true} value={password} placeholder="Password" autoCapitalize="none" onChangeText={(text)=>setPassword(text)}></TextInput>
            {loading ? (<ActivityIndicator size="large" color="#0000ff" />) : (<>
                <Button title="Signup" onPress={register}/>
                <Button title="Already have an account?" onPress={()=>navigation.navigate('Login')}/>
                </>)}
                
            </KeyboardAvoidingView>
        </View>
    )

}
export default Register;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex:1,
        justifyContent: 'center'
    },
    input:{
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff'

    }
})
