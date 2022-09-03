import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { People } from '../screens/People';
import { Favorites } from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export const NavigationBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="People" component={People} />
            <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    )
}
