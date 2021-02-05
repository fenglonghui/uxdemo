/*
 * actions
 * @Author: ""
 * @Date: 2021-02-04 11:12:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-05 11:50:09
 * @Description:
 */
import {UPDATE_NAME} from './actionsTypes';

const changeName = (id, name) => ({type: UPDATE_NAME, id: id, name: name});

export default {changeName};
