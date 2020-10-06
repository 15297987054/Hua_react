import React, { Component, Fragment } from 'react'
import { HeaderWrapper, HeaderContainer,FormInput,BoxRotate } from './style'
export default class Header extends Component {
    constructor(){
        super()
        this.state={
            value:''
        }
    }
    render() {
        let {value} = this.state
        return (
            <Fragment>
                <HeaderWrapper color="yellow">
                    <h1>头部组件1</h1>
                    <div><h1>头部组件2</h1></div>
                    <div className="hello">您好</div>
                </HeaderWrapper>
                <HeaderContainer>继承style</HeaderContainer>
                <FormInput value={value} onChange={this.handleChange.bind(this)}/>
                <BoxRotate></BoxRotate>
            </Fragment>
        )
    }
    handleChange(e){
        let val = e.target.value
        this.setState({
            value:val
        })
    }
}