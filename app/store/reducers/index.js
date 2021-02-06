/*
 * reducers
 * @Author: 
 * @Date: 2021-02-06 19:31:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-06 20:18:11
 * @Description: 
 */
import {combineReducers} from 'redux';
import userlist from './userlist';
import listname from './listname';


export default combineReducers({userlist, listname});
