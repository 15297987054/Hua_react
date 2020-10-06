export const NUM_ADD_ACTION =()=> {
    return (dispatch)=>{
        Promise.resolve({username:'张三',age:10}).then(res=>{
            dispatch({type:'num_add',value:res})
        })
    }
}