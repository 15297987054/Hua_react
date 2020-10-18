import {createStore} from 'redux'
import {combineReducers} from 'redux-immutable'
import tab from './reducers/tab'

const reducers = combineReducers({
    tab
})

const store = createStore(reducers)

export default store