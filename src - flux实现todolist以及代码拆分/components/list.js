import React, { Component } from 'react'
import store from '../store'
import dispatcher from '../store/dispatch'
import {DEL_LIST} from '../actions/actionCreate'
import ListUi from './listUi'
export default class List extends Component{
    constructor(){
        super()
        this.state={
            ...store.getState()
        }
        store.handleUpdate(this.handleUpdate.bind(this))
    }
    render(){
        let {list} = this.state
        return (
           <ListUi list={list} handleDel={this.handleDel}/>
        )
    }
    handleUpdate(){
        this.setState(store.getState())
    }
    handleDel(val){
        dispatcher.dispatch(DEL_LIST(val))
    }
}