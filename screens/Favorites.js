import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const Favorites = () => {

    return (
        <View style={styles.container}>
            <Text>Hello Simi </Text>
            <Text>Thats me</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
});