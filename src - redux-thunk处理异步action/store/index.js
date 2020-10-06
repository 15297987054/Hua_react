import {createStore,applyMiddleware,combineReducers} from 'redux'
import reducer from './reducer'
import reduxThunk from 'redux-thunk'
const reducers = combineReducers({
    reducer
})
const store = createStore(reducers,applyMiddleware(reduxThunk))
export default store