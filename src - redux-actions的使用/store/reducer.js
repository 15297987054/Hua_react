import {handleActions} from 'redux-actions'
const initState = {
    n:10
}

export default handleActions({
    num_add:(state,action)=>{
        let newState = Object.assign({},state)
        newState.n=action.payload
        return newState
    }
},initState)
// export default (state=initState,action)=>{
//     switch(action.type){
//         case 'num_add':
//             let newState = Object.assign({},state)
//             newState.n++
//             return newState
//     }
//     return state
// }