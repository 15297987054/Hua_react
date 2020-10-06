const defaultState = {
    inputVal:'',
    list:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "input_change":
            let newState = JSON.parse(JSON.stringify(state))
            newState.inputVal = action.value
            return newState 
        case "list_add":
            let listState = JSON.parse(JSON.stringify(state))
            listState.list.push(listState.inputVal)
            listState.inputVal = ''
            return listState
    }
    return state
}