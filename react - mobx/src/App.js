import React,{Component} from 'react';
import List from './components/list'
class App extends Component{
  constructor(){
    super()
    this.state={
      flag:true
    }
  }
  render(){
    return (
      <div>
        {this.state.flag?<List/>:''}
        <button onClick={this.handleDestroy.bind(this)}>销毁</button>
      </div>
    )
  }
  handleDestroy(){
    this.setState({
      flag:false
    })
  }
}
export default App;
