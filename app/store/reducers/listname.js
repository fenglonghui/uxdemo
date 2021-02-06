/*
 * @Author: 
 * @Date: 2021-02-06 19:56:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-06 20:18:23
 * @Description: 
 */
import {SAVE_LIST_NAME} from '../actions/actionsTypes';

const listname = (state = '', action) => {
    switch(action.type){
        case SAVE_LIST_NAME: 
            return action.listName;
        default:
            return state;
    }
}

export default listname;