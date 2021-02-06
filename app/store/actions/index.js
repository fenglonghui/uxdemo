/*
 * actions
 * @Author: ""
 * @Date: 2021-02-04 11:12:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-06 19:55:17
 * @Description:
 */
import {UPDATE_NAME, SAVE_LIST_NAME} from './actionsTypes';

// 修改用户姓名
const changeName = (id, name) => ({type: UPDATE_NAME, id, name});
// 保存列表名称
const saveListName = (listName) => ({type: SAVE_LIST_NAME, listName});

export default {changeName, saveListName};
