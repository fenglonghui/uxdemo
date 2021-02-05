/*
 * App根组件
 * @Author:
 * @Date: 2021-02-04 10:42:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-05 11:48:50
 * @Description: 根组件集成Redux
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import AppNavigator from './routeNavigator/AppNavigator';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
