const defaultState = {
    num:10
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'num_add':
            var newState = Object.assign({},state)
            newState.num++
            return newState
    }
    return state
}