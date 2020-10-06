import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            inputVal:"",
            list:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    render() {
        let {inputVal,list} = this.state
        return (
            <div>
                <input type="text" value={inputVal} onChange={this.handleChange}/>
                <button onClick={this.handleAdd}>点击</button>
                <ul>
                    {
                        list.map((item,index)=>{
                            return <li key={index}>{item}
                                <button onClick={this.handleDel.bind(this,index)}>删除</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    handleChange(e){
        let val = e.target.value
        this.setState({
            inputVal:val
        })
    }
    handleAdd(){
        let arr = this.state.list
        arr.push(this.state.inputVal)
        this.setState({
            list:arr,
            inputVal:''
        })
    }
    handleDel(index){
        let arr = this.state.list
        arr.splice(index,1)
        this.setState({
            list:arr
        })
    }

}

export default App