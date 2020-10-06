import React,{Component} from 'react'
import Observer from '../observer'
class Two extends Component{
    constructor(){
        super()
        this.state={
            info:''
        }
        Observer.$on('handleSendThree',(val)=>{
            this.setState({
                info:val
            })
        })
    }
    render(){
        let {info} = this.state
        return (
            <div className="two">
                Two
                <h2>接收到three组件的信息为：{info}</h2>
                <button onClick={this.handleAdd.bind(this)}>点击</button>
            </div>
        )
    }
    handleAdd(){
        this.props.handle('two组件')
    }
}

export default Two