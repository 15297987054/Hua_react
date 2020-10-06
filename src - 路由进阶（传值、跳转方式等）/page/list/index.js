import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'

class List extends Component{
    constructor(){
        super()
        this.state={
            goods:[
                {
                    id:1,
                    goodsName:'香蕉'
                },
                {
                    id:2,
                    goodsName:'西瓜'
                },
                {
                    id:3,
                    goodsName:'南瓜'
                }
            ]
        }
    }
    render(){
        let {goods} = this.state
        return (
            <div>
                {
                    goods.map((item)=>{
                       return <div key={item.id}>
                    {/**<Link to={'/detail/'+item.id+'/'+item.goodsName}>{item.goodsName}</Link> */}
                        <Link to={'/detail?id='+item.id+'&name='+item.goodsName}>{item.goodsName}</Link>
                        {/**<Link to={{pathname:'/detail',query:{id:item.id,name:item.goodsName}}}>{item.goodsName}</Link> */}
                       </div>
                    })
                }
                <button onClick={this.handleForward.bind(this)}>前进</button>
                <button onClick={this.handlePush.bind(this)}>跳转</button>
            </div>
        )
    }
    handleForward(){
        this.props.history.goForward()
    }
    handlePush(){
        this.props.history.push('/home')
    }
}

export default withRouter(List)