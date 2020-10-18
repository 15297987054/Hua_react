import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import {LIST_DEL,LIST_MODIFY} from '../actions/tab'
class List extends Component{
    render(){
        let {list} = this.props
        return (
            <div>
                <ul>
                       {
                           list.map((item,index)=>(
                               <li key={index}> 
                                    <p>{item.name}</p>
                                    <p>{item.age}</p>
                                    <p>{item.sign}</p>
                                    <button onClick={this.props.handleDel.bind(this,index)}>删除</button>
                                    <button onClick={this.props.handleModify.bind(this,index)}>修改</button>
                                </li>
                           ))
                       }
                </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    list:state.getIn(['tab','list'])
})
const mapDispathToProps = (dispatch)=>({
    handleDel(index){
        dispatch(LIST_DEL(index))
    },
    
    handleModify(index){
        this.props.handleToggle(true)
        //1. 父级状态改为false  2.记录需要修改的数据
        dispatch(LIST_MODIFY(index))
    }
})
export default connect(mapStateToProps,mapDispathToProps)(List)