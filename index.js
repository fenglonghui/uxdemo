/*
 * @Author:
 * @Date: 2021-01-27 10:42:14
 * @LastEditors:
 * @LastEditTime: 2021-02-04 18:18:56
 * @Description:
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './app/Root';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
