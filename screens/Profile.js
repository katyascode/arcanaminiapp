import { Text } from "react-native";
import {useSelector} from 'react-redux';
function Profile(){
    const info = useSelector(state=>state.auth);
    console.log("Info is here: ", info);
    return (
        <Text>{info.email}</Text>
    )

}
export default Profile;