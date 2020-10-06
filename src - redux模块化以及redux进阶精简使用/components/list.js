import React, { Component } from 'react'
import store from '../store'
export default class List extends Component{
    constructor(){
        super()
        this.state = {
            ...store.getState().todo
        }
        store.subscribe(this.handleUpdate.bind(this))
    }
    render(){
        let {list} = this.state
        return (
            <div>
                {
                    list.map((item,index)=>{
                        return <ul key={index}>
                            <li>{item}</li>
                        </ul>
                    })
                }
            </div>
        )
    }
    handleUpdate(){
        this.setState(store.getState().todo)
    }
}