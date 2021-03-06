/*
 * reducers
 * @Author: ""
 * @Date: 2021-02-24 11:24:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-06 19:47:38
 * @Description:
 */

import {UPDATE_NAME} from '../actions/actionsTypes';

// 默认 state
const list = [
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

const userlist = (state = list, action) => {
  switch (action.type) {
      case UPDATE_NAME:
          return state.map((item) =>
                item.id === action.id ? {...item, name: action.name} : item,
            )
    default:
      return state;
  }
}

export default userlist;
