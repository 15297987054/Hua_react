import React from 'react'

export default (WraperComponent)=>{
    return class extends WraperComponent{
        constructor(){
            super();
        }
        render(){
            this.state.dir = true
            return (
                super.render()
            )
        }
    }
}