import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { People } from '../screens/People';
import { Favorites } from '../screens/Favorites';
import { Image, SafeAreaView } from 'react-native';
import {
    Ionicons, MaterialIcons
} from '@expo/vector-icons/';

const Tab = createBottomTabNavigator();

export const NavigationBar = ({ people, favoritePeople, setFavoritePeople, removeFavorite, removePeople, specialHandler }) => {

    const random = Math.floor(Math.random() * people.length)

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="People"
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        let color = 'grey'

                        if (focused) {
                            color = '#3a86ff'
                        }
                        else {
                            color = 'grey'
                        }
                        return <Ionicons name='people' size={28} color={color} />
                    },
                })}
                children={() => {
                    return (
                        <People people={people} setFavoritePeople={setFavoritePeople} random={random} removePeople={removePeople} />
                    )
                }}
            />
            <Tab.Screen
                name="Favorites"
                options={() => ({
                    tabBarIcon: ({ focused }) => {

                        let color = 'grey'
                        if (focused) {
                            color = '#3a86ff'
                        }
                        else {
                            color = 'grey'
                        }
                        return <MaterialIcons name='favorite' size={28} color={color} />
                    },
                })}
                children={() => {
                    return (
                        <Favorites favoritePeople={favoritePeople} removeFavorite={removeFavorite} random={random} people={people} setFavoritePeople={setFavoritePeople} specialHandler={specialHandler} />
                    )
                }} />
        </Tab.Navigator>
    )
}
