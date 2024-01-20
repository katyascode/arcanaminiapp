import React from 'react';
import { 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    Image, 
    StyleSheet 
} from 'react-native';
import searchButtonIcon from './searchbuttonicon.png';

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
      <TouchableOpacity style={styles.searchButton} /*onPress={() = {}}*/> 
        <Image 
            source={searchButtonIcon}
            resizeMode="contain"
            style={styles.searchButtonImage}
        />
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
        //backgroundColor: COLORS.white,
        //marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        //borderRadius: SIZES.medium,
        height: "100%",
    },
    searchInput: {
        //fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        //paddingHorizontal: SIZES.medium,
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
            width: "50%",
            height: "50%",
            //tintColor: COLORS.white,
          },
    },
})
