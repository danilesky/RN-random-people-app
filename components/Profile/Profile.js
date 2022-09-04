import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Profile = ({ people }) => {
    const random = Math.floor(Math.random() * people.length)
    return (
        <View style={styles.container}>
            <Image
                style={styles.picture}
                source={{
                    uri: people[random].picture.large,
                }}
            />
            <Text style={styles.title} >{people[random].name.first}</Text>
            <Text style={styles.age}>{people[random].registered.age} y.o.</Text>
            <Button
                title="Add to Favorite"
                color="#841584"
                accessibilityLabel="Adds this Human to Favorite"
            />
            <StatusBar style="auto" />
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
    }
});

Profile.propTypes = {

}

export default Profile