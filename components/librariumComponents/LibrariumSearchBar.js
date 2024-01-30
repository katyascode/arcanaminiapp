import React from 'react';
import { 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    Image, 
    StyleSheet 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LibrariumSearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      
    <View style={styles.searchBar}>
      <TouchableOpacity>
          <Ionicons name="search-sharp" size={30}></Ionicons>
      </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
              style={styles.searchInput}
              value=""
              //onChange={() = {}} // handle to search
              placeholder="Search for something specific" // maybe can change look @ other pages later
          />
        </View>
    </View>


    
    </View>
  )
}

export default LibrariumSearchBar;

const styles = StyleSheet.create({
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: "20px",
        height: 50,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ffffff', // Background color of the search bar
      borderRadius: 5, // Adjust as needed
      padding: 5, // Adjust as needed
    },
    searchWrapper: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#f2f2f1",
        //margin: "6px",
        justifyContent: "center",
        alignItems: "right",
        borderRadius: "20px",
        height: "100%",
    },
    searchInput: {
        //fontFamily:,
        width: "100%",
        height: "100%",
        //paddingHorizontal: ,
    },
    searchButton: {
        width: 50,
        height: "100%",
        flexDirection: "row",
        //backgroundColor: ,
        //borderRadius: ,
        justifyContent: "center",
        alignItems: "center",
    },
    searchButtonImage: {
        searchBtnImage: {
            width: 28,
            height: 28,
            //flex: ,
          },
    },
})
