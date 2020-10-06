const defaultState={
    n:10
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'num_add_action':
            let newState = Object.assign({},state)
            newState.n++
            return newState
    }
    return state
}