import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// need to add handle press functionality
const LibrariumSubpageButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Text style={styles.title}>{props.pageTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LibrariumSubpageButton;

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
        borderRadius: '20%',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        padding: '1%',
        height: 84,
    },
    title: {
        textAlign: 'center',
    }

})