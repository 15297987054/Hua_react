import React,{Component} from 'react';
import List from './component/list'
import Input from './component/input'
import {observer,inject} from 'mobx-react'
@inject('store')
@observer
class App extends Component{
  render(){
    let {todo}  = this.props.store
    return (
      <div>
       <Input/>
       <List/>
       <button onClick={todo.handleMovieList}>点击获取数据</button>
      </div>
    )
  }
}
export default App;
