import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Profile from '../components/Profile';

export const People = ({ people, setFavoritePeople }) => {

    return (
        <Profile people={people} setFavoritePeople={setFavoritePeople}></Profile>
    )
}

const styles = StyleSheet.create({

});