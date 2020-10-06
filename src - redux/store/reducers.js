/**
 *  1.必须创建一个初始的state
 *  2.state数据只能读不能修改
 *  3.只能返回一个纯函数
 * 
 *  这个纯函数就是用来修改数据的，每次修改完数据，就会给当前reducer传递一个新的state
 */
const defaultState = {
    n:10
}

export default (state = defaultState,action)=>{
    switch(action.type){
        case 'num_add_action':
            var newNumState = Object.assign({},state)
            newNumState.n++
            return newNumState
    }
    return state
}