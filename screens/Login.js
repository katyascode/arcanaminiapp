import { ActivityIndicator, StyleSheet, TextInput,Button, View, KeyboardAvoidingView,Text } from "react-native";
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
            
        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);

        }
        setLoading(false);
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding"> 
        <View>
            <View style={styles.headingView}>
                <Text style={styles.heading}>Account details</Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.subHeading}>Email</Text>
                <TextInput style={styles.input} placeholderTextColor="#524b4a"  value={email} placeholder="Enter your email here" autoCapitalize="none" onChangeText={(text)=>setEmail(text)}></TextInput>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.subHeading}>Password must be 6-12 characters long</Text>
                <TextInput style={styles.input}  placeholderTextColor="#524b4a" secureTextEntry={true} value={password} placeholder="XXX" autoCapitalize="none" onChangeText={(text)=>setPassword(text)}></TextInput>
            </View>
            {loading ? (<ActivityIndicator size="large" color="#0000ff" />) : (<View style={styles.buttonContainer}>
            <Button title="Login" onPress={login}/>
            <Button title="Create an account" onPress={()=>navigation.navigate('Register')}/>
            </View>)}
     </View>
        </KeyboardAvoidingView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex:1,
        justifyContent:"center"
    },
    input:{
        marginVertical: 4,
        height: 48,
        border: 0,
        paddingTop: 0,
        padingBottom:0,
        paddingLeft: 26,
        margin:0,
        fontSize:"17px",
        
        backgroundColor: '#fff'
    },
    headingView:{
        alignItems: 'center',
        marginBottom: 20,
    },
    heading:{
        fontSize: 30,
        fontWeight: '300',
        fontWeight:"400",
        color: "black"
    },
    wrapper:{
        backgroundColor:"white",
        borderRadius: 20,
        marginBottom: 10,
        overflow:"hidden"
    },
    subHeading:{
       color:"#575454",
       fontSize: 16,
       fontWeight: "400", 
       paddingLeft: 20,
       paddingTop: 8,
       paddingBottom: 0,
       marginTop: 5,
    },
    buttonContainer:{
        display:'flex',
        flexDirection: "row", 
        justifyContent: "space-evenly",
    }
})
