import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state={
                info:'天涯何处无芳草',
                arr:[1,2,3,5,6,6,6]
        }
        this.handleAlert = this.handleAlert.bind(this)
    }
    render(){
        let {info,arr} = this.state
        return (
            <div>
                <div>{info}</div>
                <ul>
                    {
                        arr.map((item,index)=>{
                            // return <li onClick={this.handleAlert} key={index}>{item}</li>
                            return <li onClick={this.handleAlert.bind(this,index)} key={index}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={this.handleModfy.bind(this)}>点击</button>
            </div>
        )
    }
    handleAlert(){
        alert(1)
    }
    handleModfy(){
        var newArr = [10,20,30,405,59]
        this.setState({
            arr:newArr
        },()=>{
            console.log(this.state.arr);
        })
    }
}

export default App