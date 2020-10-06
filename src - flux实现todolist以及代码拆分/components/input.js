import React, { Component } from 'react'
import dispatcher from '../store/dispatch'
import store from '../store'
import {INPUT_CHANGE,LIST_ADD} from '../actions/actionCreate'
import InputUi from './inputUi'
export default class Input extends Component{
    constructor(){
        super()
        this.state={
            ...store.getState()
        }
        store.handleUpdate(this.handleUpdate.bind(this))
    }
    render(){
        let {inputVal} = this.state
        return (
           <InputUi inputVal={inputVal} handleChange={this.handleChange} handleAdd={this.handleAdd}/>
        )
    }
    handleAdd(){
        dispatcher.dispatch(LIST_ADD)
    }
    handleChange(e){
        let val = e.target.value
        dispatcher.dispatch(INPUT_CHANGE(val))
    }
    handleUpdate(){
        this.setState(store.getState())
    }
    
}