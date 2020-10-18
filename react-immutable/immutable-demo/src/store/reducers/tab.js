import {fromJS} from 'immutable'
import {handleActions} from 'redux-actions'

const defaultState=fromJS({
    name:"1",
    age:"2",
    sign:"3",
    list:[],
    modifyIndex:-1,
    modifyData:{
        name:'',
        age:"",
        sign:''
    }
})

export default handleActions({
    change_action:(state,action)=>{
        switch(action.payload.type){
            case 1:
                return state.updateIn(['name'],()=>action.payload.value)
            case 2:
                return state.updateIn(['age'],()=>action.payload.value)
            case 3:
                return state.updateIn(['sign'],()=>action.payload.value)
        }
    },
    input_action:(state)=>{
        return state.updateIn(['name'],()=>'').updateIn(['age'],()=>'').updateIn(['sign'],()=>'')
    },
    list_add:(state)=>{
        var obj = {}
        obj.name = state.getIn(['name'])
        obj.age = state.getIn(['age'])
        obj.sign = state.getIn(['sign'])

       return state.updateIn(['list'],(list)=>list.push(obj))
       .updateIn(['name'],()=>'')
       .updateIn(['age'],()=>'')
       .updateIn(['sign'],()=>'')
    },
    list_del:(state,action)=>{
        return state.updateIn(['list'],(list)=>list.splice(action.payload,1))
    },
    list_modify:(state,action)=>{
        let obj = state.getIn(['list',action.payload])
       return state.updateIn(['modifyData'],()=>({name:obj.name,age:obj.age,sign:obj.sign}))
        .updateIn(['modifyIndex'],_=>action.payload)
    },
    change_modify_action:(state,action)=>{
        switch(action.payload.type){
            case 1:
                return state.updateIn(['modifyData','name'],()=>action.payload.value)
            case 2:
                return state.updateIn(['modifyData','age'],()=>action.payload.value)
            case 3:
                return state.updateIn(['modifyData','sign'],()=>action.payload.value)
        }
    },
    list_update:(state)=>{
        let obj = {}
        obj.name=state.getIn(['modifyData','name'])
        obj.age=state.getIn(['modifyData','age'])
        obj.sign=state.getIn(['modifyData','sign'])
       return state.updateIn(['list'],(list)=>list.splice(state.getIn(['modifyIndex']),1,obj))
    }
},defaultState)