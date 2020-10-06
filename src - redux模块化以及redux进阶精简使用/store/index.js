import {createStore,combineReducers} from 'redux'
import num from './reducers/num'
import todo from './reducers/todo'
const reducer = combineReducers({
    todo,
    num
})
const store = createStore(reducer)
export default store