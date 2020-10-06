import React, { Component } from 'react'

import store from '../store'
import {NUM_ADD_ACTION} from '../action/actionCreator'
export default class Num extends Component{
    constructor(){
        super()
        this.state = {
            ...store.getState().num
        }
        store.subscribe(this.handleUpdate.bind(this))
    }
    render(){
        let {num} = this.state
        return (
            <div>
                <h2>{num}</h2>
                <button onClick={this.handleAdd.bind(this)}>点击</button>
            </div>
        )
    }
    handleUpdate(){
        this.setState(store.getState().num)
    }
    handleAdd(){
        store.dispatch(NUM_ADD_ACTION)
    }
}