import React from 'react'
export default (WrapperCompontnt)=>{
    return class extends WrapperCompontnt{
        render(){
            if(this.state.success){
                 return super.render()
            }
            return <div>loading......</div>
        }
    }
}