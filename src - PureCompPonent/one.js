import React, { PureComponent } from 'react'

export default class One extends PureComponent{
    constructor(){
        super()
        this.state={
            username:'aluuty',
            obj:{
                age:19
            }
        }
    }
    render(){
        console.log('render执行力');
        return (
            <div>
                <h1>{this.state.username}</h1>
                <h1>{this.state.obj.age}</h1>
                <button onClick={this.handlemodify.bind(this)}>点击</button>
            </div>
        )
    }
    handlemodify(){
        this.setState({
            username:'站三',
            obj:{age:30}
        })
    }
}