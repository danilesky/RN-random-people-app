import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { People } from '../screens/People';
import { Favorites } from '../screens/Favorites';
import { Image } from 'react-native';
import {
    Ionicons,
    Entypo,
    MaterialCommunityIcons,
    FontAwesome
} from '@expo/vector-icons/';

const Tab = createBottomTabNavigator();

export const NavigationBar = ({ people, favoritePeople, setFavoritePeople }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="People"
                children={() => {
                    return (
                        <People people={people} setFavoritePeople={setFavoritePeople} />
                    )
                }}
            />
            <Tab.Screen
                name="Favorites"
                children={() => {
                    return (
                        <Favorites favoritePeople={favoritePeople} />
                    )
                }} />
        </Tab.Navigator>
    )
}
