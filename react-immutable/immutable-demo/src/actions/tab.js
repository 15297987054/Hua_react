import {createAction} from 'redux-actions'

export const CHANGE_ACTION = createAction('change_action',(type,value)=>({type,value}))

export const INPUT_ACTION = createAction('input_action')

export const LIST_ADD = createAction('list_add')

export const LIST_DEL = createAction('list_del',(index)=>index)

export const LIST_MODIFY = createAction('list_modify',(index)=>index)

export const CHANGE_MODIFY_ACTION = createAction('change_modify_action',(type,value)=>({type,value}))


export const LIST_UPDATE = createAction('list_update')