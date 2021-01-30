/* 
 * App
 * @Author: 
 * @Date: 2021-01-27 10:42:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-27 11:33:36
 * @Description: 
 */

import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import EditScreen from './components/EditScreen';

import {Provider} from 'react-redux';
import store from './store/store';

const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Details" component={DetailsScreen} />
                        <Stack.Screen name="Edit" component={EditScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}