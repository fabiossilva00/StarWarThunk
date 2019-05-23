import { combineReducers } from 'redux'
import { peopleReducer } from '../reducers/peopleReducer'

export const reducers = combineReducers({
    peopleState: peopleReducer
})