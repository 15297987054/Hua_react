// export const createStore = (reducer)=>{
//     let state;
//     let eventList = []
//     let initAction = {
//         type:"@@redux/"+Math.random()
//     }
//     const getState=()=>state
//     const dispatch=(action=initAction)=>{
//        state= reducer(state,action)
//        eventList.forEach((item)=>{
//            item()
//        })
//     }
//     const subscribe = (callback)=>{
//         eventList.push(callback)
//     }
//     dispatch()
//     return {
//         getState,
//         dispatch,
//         subscribe
//     }
// }

export const createStore = (reducer)=>{
    let state;
    let eventList=[]
    let initAction={
        type:'@@redux/'+Math.random()
    }
    const getState=()=>state
    const dispatch=(action=initAction)=>{
        state = reducer(state,action)
        eventList.forEach((item)=>{
            item()
        })
    }
    const subscribe=(callback)=>{
        eventList.push(callback)
    }
    dispatch()
    return {
        getState,
        dispatch,
        subscribe
    }
}