import {person} from '../action/index'

const personReducer = (state={name: 'jgmiu', age: 25}, action) => {
    switch(action.type) {
        case person.CHANGE_NAME: 
            return {...state, name: action.name}
            break
        case person.CHANGE_AGE:
            return {...state, age: action.age}
            break
        default:
            return state
    }
}

export default personReducer