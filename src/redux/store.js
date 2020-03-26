import reducers from './reducer/index'
import {createStore} from 'redux'

const store = createStore(reducers)

export default store