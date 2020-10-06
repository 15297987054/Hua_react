import { Dispatcher } from 'flux'
import store from '.';
import {INPUT_CHANGE_ACTION,LIST_ADD_ACTION,DEL_LIST_ACTION} from '../actions/actionTypes'
const dispatcher = new Dispatcher();

dispatcher.register((action) => {
    switch (action.type) {
        case INPUT_CHANGE_ACTION:
            store.handleChange(action.value)
            break;
        case LIST_ADD_ACTION:
            store.handleAddList();
            break;
        case DEL_LIST_ACTION:
            store.handleDelLsit(action.value)
    }
})

export default dispatcher