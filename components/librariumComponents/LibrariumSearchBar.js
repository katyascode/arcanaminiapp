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
      <View style={styles.searchWrapper}>
        <TextInput
            style={styles.searchInput}
            value=""
            //onChange={() = {}} // handle to search
            placeholder="Search for something specific" // maybe can change look @ other pages later
        />
      </View>

      <TouchableOpacity>
        <Ionicons name="search-sharp" size={28}></Ionicons>
      </TouchableOpacity>
    
    </View>
  )
}

export default LibrariumSearchBar;

const styles = StyleSheet.create({
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        //marginTop: SIZES.large,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: "#f2f2f1",
        margin: "6px",
        justifyContent: "center",
        alignItems: "center",
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
