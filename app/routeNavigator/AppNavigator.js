/*
 * 路由导航
 * @Author:""
 * @Date: 2021-02-04 20:03:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-05 11:45:42
 * @Description: 组件跳转
 */
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';
import EditScreen from '../components/EditScreen';

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: '设置Home标题'}}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{title: '设置Details标题'}}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
