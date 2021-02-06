/*
 * reducer集合（全局只用一个 reducer）
 * @Author: 
 * @Date: 2021-02-06 20:20:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-06 20:50:18
 * @Description: 
 */
import {combineReducers} from 'redux';
import {UPDATE_NAME, SAVE_LIST_NAME} from '../actions/actionsTypes';

// 默认状态
const defaultState = {
    listname: '',
    userlist: [
        {
            id: '001',
            name: '路人甲',
            sex: '女',
            age: 27,
        },
        {
            id: '002',
            name: '路人乙',
            sex: '女',
            age: 31,
        },
        {
            id: '003',
            name: '路人丙',
            sex: '男',
            age: 45,
        }
    ]
}

const user = (state = defaultState, action) => {
    switch(action.type){
        case UPDATE_NAME:
            return {
                ...state,
                userlist: state.userlist.map(
                    item => item.id === action.id ? {...item, name: action.name} : item
                )
            };
        case SAVE_LIST_NAME:
            return {
                ...state,
                listname: action.listName
            }
        default:
            return state;
    }
}

export default combineReducers({user});
