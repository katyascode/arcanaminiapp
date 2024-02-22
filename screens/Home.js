import { View, Text, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { login } from '../store/authSlice';

const Home = () => {
    const dispatch = useDispatch();
    const info = useSelector(state=>state.auth);
    console.log("Info is here: ", info);

    //const [user, setUser] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(FIREBASE_AUTH, (user)=>{
            console.log("User is here",user);
            dispatch(login({"email":user.email}))
        })
       
    })

    return (

        <View>
            <Text>Home</Text>
            {/*<Button title="Calender" onPress={() => router.push('/calender')}></Button>
            <About></About> */}
        </View>

    );
}

export default Home;