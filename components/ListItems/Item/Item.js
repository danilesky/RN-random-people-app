import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Text, View, SafeAreaView, Image, Button, Dimensions } from 'react-native';

const Item = ({ item }) => {
    return (
        <SafeAreaView style={styles.item}>
            <Image
                style={styles.picture}
                source={{
                    uri: item.picture.large,
                }}
            />
            <Text style={styles.title}>{item.name.first}</Text>
            <Text style={styles.title}>{item.name.last}</Text>
            <View style={styles.button}>
                <Button
                    title="x"
                    color="white"
                />
            </View>
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
        paddingEnd: 10
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
        backgroundColor: '#81159',
        marginLeft: 'auto'
    }
});


Item.propTypes = {

}

export default Item
