import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

const Item = ({ item }) => {
    return (
        <View style={styles.item}>
            <Image
                style={styles.picture}
                source={{
                    uri: item.picture.large,
                }}
            />
            <Text style={styles.title}>{item.name.first}</Text>
            <Text style={styles.title}>{item.name.last}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3a86ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        alignSelf: 'stretch',
        marginBottom: 0,
        borderRadius: 10
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
});


Item.propTypes = {

}

export default Item
