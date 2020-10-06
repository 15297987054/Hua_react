import React, { Component, Fragment } from 'react'
import store from '../store'
import {INPUT_CHNAGE_ACTION,LIST_ADD_ACTION} from '../action/actionCreator'
export default class Input extends Component{
    constructor(){
        super()
        this.state = {
            ...store.getState().todo
        }
        store.subscribe(this.handleUpdate.bind(this))
    }
    render(){
        let {inputVal} = this.state
        return (
            <Fragment>
                <input value={inputVal} onChange={this.handleChange.bind(this)} type="text"/>
                <button onClick={this.handleAdd.bind(this)}>点击</button>
            </Fragment>
        )
    }
    handleAdd(){
        store.dispatch(LIST_ADD_ACTION)
    }
    handleChange(e){
        let val = e.target.value
        store.dispatch(INPUT_CHNAGE_ACTION(val))
    }
    handleUpdate(){
        this.setState(store.getState().todo)
    }
}