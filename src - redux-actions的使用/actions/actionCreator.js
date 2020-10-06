import {createAction} from 'redux-actions'
// export const NUM_ADD_ACTION = {
//     type:'num_add'
// }

export const NUM_ADD_ACTION = createAction('num_add',(val)=>val)