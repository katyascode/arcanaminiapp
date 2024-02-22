import { createUserWithEmailAndPassword } from "firebase/auth";
import { ActivityIndicator, StyleSheet, TextInput,Button, View, KeyboardAvoidingView, Text } from "react-native";
import { useState } from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";

function Register({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const auth = FIREBASE_AUTH;
    
    const register = async()=>{
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth,email, password);  
        }catch(error){
            console.log(error);
        }
        setLoading(false);
        navigation.navigate('Home')
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding"> 
        <View>
            <View style={styles.headingView}>
                <Text style={styles.heading}>Account details</Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.subHeading}>What can we call you?</Text>
                <TextInput style={styles.input} placeholderTextColor="#524b4a"  value={name} placeholder="Enter your email here" autoCapitalize="none" onChangeText={(text)=>setName(text)}></TextInput>
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
            <Button title="Signup" onPress={register}/>
            <Button title="Already have an account?" onPress={()=>navigation.navigate('Login')}/>
            </View>)}
     </View>
        </KeyboardAvoidingView>
    )

}
export default Register;

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
