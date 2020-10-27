import React from 'react'
import {observer,inject} from 'mobx-react'
@inject('store')
@observer
class List extends React.Component{
    render(){
        let {todo}  = this.props.store
        return (
            <div>
              <ul>
                {
                    todo.list.map((item,index)=>(
                        <li key={index}>{item}</li>

                    ))
                }
              </ul>
              <p>现在一共有{todo.coutlen}条数据</p>
            </div>
        )
    }
}

export default List