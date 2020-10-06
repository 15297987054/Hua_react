import React, { Component } from 'react'
import {Link } from 'react-router-dom'
class Home extends Component{
    render(){
        return (
            <div>
                <h2>头部</h2>
                <Link to="/home/now">正在热映</Link>
                <Link to="/home/comming">即将上映</Link>
            </div>
        )
    }
}

export default Home