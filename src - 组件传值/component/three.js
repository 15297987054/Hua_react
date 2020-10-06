import React,{Component} from 'react'
import Observer from '../observer'
class Three extends Component{
    render(){
        return (
            <div className="three">
                three
                <button onClick={this.handleSend.bind(this)}>点击发送</button>
            </div>
        )
    }
    handleSend(){
        Observer.$emit('handleSendThree','three组件')
    }
}

export default Three