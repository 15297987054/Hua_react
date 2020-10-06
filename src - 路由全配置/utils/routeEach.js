import React, { Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

export default (routes) => {
    //遍历子路由
    let routeEach = (item) => {
       return <Route path={item.path} key={item.path} render={() => {
           return <Fragment>
                <Route component={item.component} />
                <Redirect from={item.path} to={item.children[0].path} />
                <Switch>
                    {
                        item.children.map((child, index) => {
                            if (child.children) {
                                return routeEach(child)
                            } else {
                                return <Route key={child.path} path={child.path} component={child.component} />
                            }
                        })
                    }
                </Switch>
            </Fragment>
        }} />
    }

    return routes.map((item, index) => {
        if (item.children) {
            return routeEach(item)
        } else {
            return <Route key={index} path={item.path} component={item.component} />
        }
    })
}