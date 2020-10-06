import React from 'react'
import { HashRouter as Router, Route, Link, NavLink, Redirect, Switch } from 'react-router-dom'
import Home from './page/home'
import List from './page/list'
import Order from './page/order'
import './index.css'
import Now from './page/home/now'
import Comming from './page/home/comming'
import NotFound from './page/NotFound'
class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <Router>
                {/** component渲染组件 */}
                {/*<Switch>
                    <Redirect from='/' to='/home' exact/>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/order" component={Order}/>
                </Switch>*/}
                {/** render渲染组件 */}
                {/*<Switch>
                    <Redirect from='/' to='/home' exact />
                    <Route path="/home" render={()=>{
                        return <Home username="allli"/>
                    }} />
                    <Route path="/list" render={()=>{
                        return 1>2?<List/>:<h1>2312</h1>
                    }} />
                    <Route path="/order" render={()=>{
                        return <Order/>
                    }} />
                </Switch>*/}
                {/**路由嵌套 */}
                <Switch>
                    <Redirect from='/' to='/home' exact />
                    <Route path="/home" render={() => {
                        return (
                            <div>
                            <Route component = {Home}/>
                            <Redirect from='/home' to="/home/now"></Redirect>
                            <Switch>
                                <Route path="/home/now" component={Now} />
                                <Route path="/home/comming" component={Comming} />
                            </Switch>
                            </div>
                        )
                    }} />
                    <Route path="/list" render={() => {
                        return <List />
                    }} />
                    <Route path="/order" render={() => {
                        return <Order />
                    }} />
                    <Route render={() => {
                        return <NotFound />
                    }} />
                </Switch>

                <NavLink to="/home" activeClassName="ally">首页</NavLink>
                <NavLink to="/list" activeStyle={{ color: 'green' }}>列表</NavLink>
                <NavLink to="/order">订单</NavLink>
            </Router>
        )
    }

}

export default App