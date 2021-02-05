/*
 * @Author:
 * @Date: 2021-02-04 18:26:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-04 20:22:06
 * @Description:
 */
import {createStore} from 'redux';
import {applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers/reducers';

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(createLogger)),
  );
};

const store = configureStore();

export default store;
