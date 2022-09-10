import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ people, setFavoritePeople, favoritePeople, random, removePeople }) => {

    return (
        <View style={styles.container}>
            {people &&
                <View style={styles.container}>
                    <Image
                        style={styles.picture}
                        source={{
                            uri: people[random].picture.large,
                        }}
                    />
                    <Text style={styles.title} >{people[random].name.first}</Text>
                    <Text style={styles.age}>{people[random].registered.age} y.o.</Text>
                    <View style={styles.buttons_wrapper}>
                        <TouchableHighlight style={styles.add_button_wrapper} onPress={() => setFavoritePeople(people[random])} underlayColor='none'>
                            <View style={styles.add_button}>
                                <Ionicons name='heart-circle-outline' size={28} color='black' style={styles.add_button_icon} />
                                <Text style={styles.add_button_text}>Add to Favorite</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.next_button_wrapper} onPress={() => removePeople(people[random])} underlayColor='none'>
                            <View style={styles.next_button}>
                                <Ionicons name='arrow-forward-outline' size={28} color='black' style={styles.next_button_icon} />
                                <Text style={styles.next_button_text}>Next</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <StatusBar style="auto" />
                </View>
            }
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
    picture: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: '600',

    },
    age: {
        fontSize: 20,
        fontWeight: '400',
    },
    add_button_wrapper: {
        marginRight: 15
    },
    add_button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3a86ff',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    add_button_text: {
        color: 'white',
        marginLeft: 5,
        fontWeight: '600'
    },
    add_button_icon: {
        color: 'white'
    },
    next_button_wrapper: {
    },
    next_button: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    next_button_text: {
        fontSize: 20,
        fontWeight: '700',
        marginRight: 5,
    },
    buttons_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20%',
    }
});

Profile.propTypes = {

}

export default Profile
