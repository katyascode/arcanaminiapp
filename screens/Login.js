import { ActivityIndicator, StyleSheet, TextInput,Button, View } from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth =FIREBASE_AUTH;

    const login = async()=>{
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth,email, password);
            console.log(response)
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    }



    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholderTextColor="#524b4a"  value={email} placeholder="Email" autoCapitalize="none" onChangeText={(text)=>setEmail(text)}></TextInput>
            <TextInput style={styles.input}  placeholderTextColor="#524b4a" secureTextEntry={true} value={password} placeholder="Password" autoCapitalize="none" onChangeText={(text)=>setPassword(text)}></TextInput>
            {loading ? (<ActivityIndicator size="large" color="#0000ff" />) : (<>
                <Button title="Login" onPress={login}/>
                <Button title="Create an Account" onPress={()=>navigation.navigate('Register')}/>
                </>)}
        </View>
    )
}

export default Login;

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
