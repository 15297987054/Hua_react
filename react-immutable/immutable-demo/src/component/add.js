import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import {CHANGE_ACTION,INPUT_ACTION,LIST_ADD} from '../actions/tab'
class Add extends Component{
    render(){
        let {username,age,sign} = this.props
        return (
            <div>
                <label>姓名：
                    <input value={username} onChange={this.props.handlechange.bind(this,1)}  type="text"/>
                </label>
                <br/>
                <label>年龄：
                    <input value={age} onChange={this.props.handlechange.bind(this,2)}  type="text"/>
                </label>
                <br/>
                <label>签名：
                    <input value={sign} onChange={this.props.handlechange.bind(this,3)} type="text"/>
                </label>
                <br/>
                <button onClick={this.props.handleAdd.bind(this)}>添加</button>
                <button onClick={this.props.handleClean.bind(this)}>取消</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    username:state.getIn(['tab','name']),
    age:state.getIn(['tab','age']),
    sign:state.getIn(['tab','sign'])
})
const mapDispatchToProps=(dispatch)=>({
        handlechange(type,e){
            dispatch(CHANGE_ACTION(type,e.target.value))
        },
        handleClean(){
            dispatch(INPUT_ACTION())
        },
        handleAdd(){
            dispatch(LIST_ADD())
        }
    })
export default connect(mapStateToProps,mapDispatchToProps)(Add)