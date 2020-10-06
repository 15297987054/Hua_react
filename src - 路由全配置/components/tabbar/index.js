import React, { Component } from 'react'
import { TabBarRoutes } from '../../router'
import {NavLink} from 'react-router-dom';
import './index.css'
export default class Tabbar extends Component{
    render(){
        return (
            <div id="tabbar">
                {
                    TabBarRoutes.map((item,index)=>{
                        return <NavLink key={index} to={item.path}>
                            <i className={'iconfont '+item.icon}></i>
                            <span>{item.name}</span>
                        </NavLink>
                    })
                }
            </div>
        )
    }
}