import { StyleSheet, View, Text, ScrollView, Image, Pressable, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { LibrariumSearchBar } from '../components/librariumComponents/LibrariumSearchBar';

// import { openDatabase } from 'react-native-sqlite-storage';
//open database
// openDatabase({ name: 'librariumdatabase.db', createFromLocation : 1})



// temporary array to show result of mapping, later will use the data retrieved from card database
// Can use card objects with parameters such as name, description, image, etc..? -KK
const testArray = [1, 2, 3, 4];
//const LibrariumScreens = ["Minor Arcana", "Major Arcana", ]

const Librarium = ({navigation}) => {
    
    return (
        <ScrollView>
            
            {/* <View style={styles.container}>
                {testArray.map((card) => {
                    return (
                        <View style={styles.card}>
                            <Image style={styles.cardImage} source='https://www.fertilome.com/media/klowrey/Article%20Images/Tree.jpg' />
                            <Text>{card}</Text>
                        </View>
                    )
                })}
            </View> */}

            {/*search bar. insert the components*/}
            <LibrariumSearchBar />


            <View style={styles.container} >
                <Pressable style={styles.card} onPress={() => navigation.navigate('MinorArcana')}>
                    <Text>Minor Arcana</Text>
                </Pressable>
            </View>

            


        </ScrollView>
    )
}

export default Librarium;

const styles = StyleSheet.create({
    container: {
        marginTop: '2%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },

    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: '2%',
        width: '45%',
        // borderRadius: '15%',
        alignItems: 'center',
        padding: '1%'
    },

    cardImage: {
        justifyContent: 'center',
        width: '80%',
        height: 400,
        objectFit: 'cover'
    }
})