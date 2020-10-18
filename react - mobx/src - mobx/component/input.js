import React from 'react'
import {observer,inject} from 'mobx-react'
@inject("store")
@observer
class Input extends React.Component{
    render(){
        let {todo} = this.props.store
        return (
            <div>
               <input type="text" value={todo.val} onChange={todo.handleInputChange}/>
               <button onClick={todo.handleListAdd}>点击</button>
            </div>
        )
    }
}

export default Input