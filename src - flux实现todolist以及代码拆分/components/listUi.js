import React, { Component } from 'react' 
export default class ListUi extends Component{
    render(){
        let {list} = this.props
        return (
            <div>
            {
                list.map((item,index)=>{
                    return (
                        <ul key={index}>
                          <li>{item}
                              <button onClick={(e)=>this.props.handleDel(index)}>删除</button>
                          </li>
                        </ul>
                    )
                })
            }
          </div>
        )
    }
}