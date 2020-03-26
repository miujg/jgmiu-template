/**
 * 将所有的reducer 结合并导出
 */
 import {combineReducers} from 'redux'
 import nav from './nav'
 import person from './person'

 export default combineReducers({nav, person})