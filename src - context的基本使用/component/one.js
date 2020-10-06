import React,{Component} from 'react'
import Two from './two'
class One extends Component{
    constructor(){
        super()
        this.state = {
            msg:'12312'
        }
    }
    render(){
        return (
            <div>
                <h2>one</h2>
                <Two/>
            </div>
        )
    }
}

export default One