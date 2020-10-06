import React from 'react'
import One from './component/one'
import Two from './component/two'
import './index.css'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
          info:'app组件',
          message:''
        }
    }
    render() {
        let {info,message} = this.state
        return (
            <div className="app">
            <h2>App组件</h2>
            <h2>接收到Two子组件的值：{message}</h2>
                <One val={info}/>
                <Two handle={this.handleInfo.bind(this)}/>
            </div>
        )
    }
    handleInfo(val){
        this.setState({
            message:val
        })
    }
}

export default App