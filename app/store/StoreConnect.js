/*
 * 封装 connect 组件
 * @Author:""
 * @Date: 2021-02-04 20:36:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-05 11:34:17
 * @Description: 将Action和dispatch绑定
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './actions';

export default (mapState) => (target) => {
  return connect(mapState, (dispatch) =>
    Object.assign(
      ...Object.keys(actions).map((key) => ({
        [key]: bindActionCreators(actions[key], dispatch),
      })),
      {dispatch},
    ),
  )(target);
};
