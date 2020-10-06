import React from 'react'
import './index.css'
import headerHoc from './headerHoc'
class Header extends React.Component{
    constructor(){
        super()
        this.state={
            dir:false
        }
    }
    render(){
        return (
            <div style={{background:this.props.color}} id="header">
                {
                    this.state.dir?<p>&lt;</p>:''
                }
                <h3>头部信息</h3>
            </div>
        )
    }
}
export default headerHoc('red')(Header)