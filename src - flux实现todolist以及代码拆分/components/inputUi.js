import React, { Component } from 'react'
export default class InputUi extends Component{
    render(){
        let {inputVal} = this.props
        return (
            <div>
                <input onChange={this.props.handleChange.bind(this)} value = {inputVal} type='text'/>
                <button onClick={this.props.handleAdd.bind(this)}>点击</button>
            </div>
        )
    }
}