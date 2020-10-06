import { INPUT_CHANGE_ACTION, LIST_ADD_ACTION, DEL_LIST_ACTION } from './actionTypes'
export const INPUT_CHANGE = (val) => ({
        type: INPUT_CHANGE_ACTION,
        value: val
})
export const LIST_ADD ={type: LIST_ADD_ACTION}

export const DEL_LIST = (val) => ({
    type: DEL_LIST_ACTION,
    value: val
})