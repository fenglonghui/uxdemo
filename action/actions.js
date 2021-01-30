/*
 * actions
 * @Author: 
 * @Date: 2021-01-27 11:12:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-27 14:46:15
 * @Description: 
 */
import {
    UPDATE_NAME
} from './actionsTypes';

const changeName = (id, name) => ({type: UPDATE_NAME, id: id, name: name});

export {changeName};

