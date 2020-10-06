import React from 'react'
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'
import Home from './page/home'
import List from './page/list'
import Order from './page/order'
import './index.css'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    render() {
        return (
           <Router>
                <Switch>
                    <Redirect from='/' to='/home' exact/>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/order" component={Order}/>
                </Switch>
                
                <NavLink to="/home" activeClassName="ally">首页</NavLink>
                <NavLink to="/list" activeStyle={{color:'green'}}>列表</NavLink>
                <NavLink to="/order">订单</NavLink>
           </Router>
        )
    }

}

export default App