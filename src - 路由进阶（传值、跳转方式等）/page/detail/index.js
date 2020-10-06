import React, { Component } from 'react'
import url from 'url'
import {withRouter} from 'react-router-dom'
class Detail extends Component{
    constructor(props){
        super(props)

        this.state={
            id:'',
            name:''
        }
        let {id,name} = url.parse(this.props.location.search,true).query
        this.state.id = id
        this.state.name = name
    }
    render(){
        let {id,name} = this.state
        return (
            <div>
                <h1>接收到商品的id:{id}</h1>
                <h1>接收到商品的名称:{name}</h1>
                <button onClick = {this.handleBack.bind(this)}>返回</button>
            </div>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }
}
export default withRouter(Detail)