import {nav} from '../action/index'

const navReducer = (state={name: '', value: ''}, action) => {
    switch(action.type) {
        case nav.CHANGE_NAME: 
            return {...state, name: action.name}
            break
        case nav.CHANGE_VALUE:
            return {...state, value: action.value}
            break
        default:
            return state
    }
}

export default navReducer