/*
 * store
 * @Author: 
 * @Date: 2021-01-27 11:29:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-27 11:29:52
 * @Description: 
 */
import {createStore} from 'redux';
import {applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/reducers';

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, compose(applyMiddleware(createLogger)));
};

const store = configureStore();

export default store;

