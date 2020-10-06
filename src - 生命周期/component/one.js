import React,{Component} from 'react'

class One extends Component{
    constructor(){
        super()
        this.state = {
            msg:'12312'
        }
        console.log('constructor');
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps');
    }
    render(){
        console.log('render');
        return (
            <div>
                <h2>one</h2>
            </div>
        )
    }
}

export default One