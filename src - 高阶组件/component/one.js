import React,{Component} from 'react'
import loadingHoc from './loadingHoc'
class One extends Component{
    constructor(){
        super()
        this.state={
            success:false
        }
    }
    render(){
        return (
            <div>
                <h2>One组件</h2>
            </div>
        )
    }
    componentWillMount(){
        setTimeout(()=>{
            this.setState({
                success:true
            })
        },1000)
    }
}

export default loadingHoc(One)