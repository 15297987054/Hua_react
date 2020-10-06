import React,{Component} from 'react'
import Three from './three'
import GlobalContext from '../globalContext'
class Two extends Component{
    constructor(){
        super()
        this.state = {
            msg:'12312'
        }
    }
    render(){
        return (
            <div>
                <h2>Two</h2>
                <GlobalContext.Consumer>
                {
                    (props)=>{
                        console.log(props);
                        return(
                            <Three/>
                        )
                    }
                }
            </GlobalContext.Consumer>
            </div>
        )
    }
}

export default Two