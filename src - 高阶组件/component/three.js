import React, { Component } from 'react'
import connect from './connect'
class Three extends Component{
    render(){
        console.log(this.props);
        return (
            <div>

            </div>
        )   
    }
}
const mapStateToProps = (state)=>({
    username:state.username
})
export default connect(mapStateToProps)(Three)