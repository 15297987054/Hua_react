import React, { Component } from 'react'

export default (color)=>(WraperComponent)=>{
    return class extends Component{
        render (){
            return (
                <WraperComponent color={color}/>
            )
        }
    }
}