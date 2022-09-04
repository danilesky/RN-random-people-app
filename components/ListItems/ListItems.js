import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Item from './Item';


const ListItems = ({ favoritePeople }) => {
    return (
        <FlatList
            data={favoritePeople}
            renderItem={({ item }) => (
                <Item item={item} />
            )}
            keyExtractor={(item, index) => index.toString()}

            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}

            style={styles.list}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        alignSelf: 'stretch',
    },
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

ListItems.propTypes = {

}

export default ListItems
