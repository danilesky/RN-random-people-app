import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Text, View, SafeAreaView, Image, Button, Dimensions, TouchableHighlight } from 'react-native';
import {
    Ionicons
} from '@expo/vector-icons/';

const Item = ({ item, removeFavorite, people, random, setFavoritePeople, specialHandler }) => {

    const [special, setSpecial] = useState(0)

    const newSpecialHandler = () => {

        setSpecial((prevState) => !prevState)
        specialHandler(item)

    }

    return (
        <SafeAreaView style={special ? styles.special : styles.item}>
            <Image
                style={styles.picture}
                source={{
                    uri: item.picture.large,
                }}
            />
            <Text style={styles.title}>{item.name.first}</Text>
            <Text style={styles.title}>{item.name.last}</Text>
            <SafeAreaView style={styles.button_wrapper}>
                <TouchableHighlight style={styles.button_star} onPress={() => { }}>
                    <View>
                        <Ionicons name='star' size={28} color='white' />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={() => removeFavorite(item)}>
                    <Ionicons name='trash' size={20} color='white' />
                </TouchableHighlight>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3a86ff',
        marginBottom: 10,
        borderRadius: 10,
        height: 60,
        paddingStart: 10,
        paddingEnd: 10,
    },
    special: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3a86ff',
        marginBottom: 10,
        borderRadius: 10,
        height: 60,
        paddingStart: 10,
        paddingEnd: 10,
        borderColor: "yellow",
        borderWidth: 5
    },
    picture: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
        marginLeft: 20
    },
    button: {
        backgroundColor: '#ffa9a3',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    button_star: {
        marginRight: 10
    },
    button_wrapper: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});


Item.propTypes = {

}

export default Item
