import React from 'react'

import GlobalContext from '../globalContext'

export default (mapStateToProps)=>(WrapperComponent)=>{
    return class extends WrapperComponent{
        render(){
            return (
                <GlobalContext.Consumer>
                   {
                       (props)=>{
                           let state = mapStateToProps(props)
                           return  <WrapperComponent {...state}/>
                       }
                   }
                </GlobalContext.Consumer>
               
            )
        }
    }
}