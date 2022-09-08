import React from 'react'
import { FlatList, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import ListItems from '../components/ListItems';

export const Favorites = ({ favoritePeople, removeFavorite, people, random }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ListItems favoritePeople={favoritePeople} removeFavorite={removeFavorite} people={people} random={random} />
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