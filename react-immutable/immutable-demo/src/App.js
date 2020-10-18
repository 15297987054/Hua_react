import React, { Component } from 'react';
import List from './component/list'
import Add from './component/add'
import Modify from './component/modify'
class App extends Component{
  constructor(){
    super()
    this.state={
      show:false
    }
  }
  render(){
    let {show} = this.state
    return (
      <div>
        {show?<Modify handleToggle={this.handleToggle.bind(this)}/>:<Add/>}
        <List handleToggle={this.handleToggle.bind(this)}/>
      </div>
    )
  }
  handleToggle(flag){
    this.setState({
      show:flag
    })
  }
}

export default App;
