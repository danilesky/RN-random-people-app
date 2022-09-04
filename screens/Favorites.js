import React from 'react'
import { FlatList, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import ListItems from '../components/ListItems';

export const Favorites = ({ favoritePeople }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ListItems favoritePeople={favoritePeople} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'stretch',
    },
});