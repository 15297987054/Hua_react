import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NUM_ADD_ACTION} from '../action/actionCreator'
 class Num extends Component{
    render(){
        let {n} = this.props
        return (
            <div>
                <h1>{n}</h1>
                <button onClick={this.props.handleAdd.bind(this)}>点击</button>
            </div>
        )
    }
    
}
const mapStateToProps=(state)=>({
    n:state.num.num
})
const mapDispatchToProps = (dispatch)=>({
    handleAdd(){
        dispatch(NUM_ADD_ACTION)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Num)