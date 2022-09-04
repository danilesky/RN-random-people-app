import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Item from './Item';


const ListItems = ({ favoritePeople }) => {
    return (
        <SafeAreaView style={styles.list}>
            {favoritePeople.length ?
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
                :
                <Text style={styles.empty}>You have no favorites yet.</Text>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%',
        padding: 10
    },
    empty: {
        color: 'black'

    }
});

ListItems.propTypes = {

}

export default ListItems
