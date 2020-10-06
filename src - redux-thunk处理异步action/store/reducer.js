const defaultState = {
    num:{username:'1',age:0}
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'num_add':
            var newState = Object.assign({},state)
            console.log(action);
            newState.num=action.value
            return newState
    }
    return state
}