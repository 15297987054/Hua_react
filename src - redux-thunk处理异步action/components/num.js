import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NUM_ADD_ACTION} from '../action/actionCreator'
 class Num extends Component{
    render(){
        let {n} = this.props
        return (
            <div>
                <h1>{n.username}</h1>
                <h1>{n.age}</h1>
                <button onClick={this.props.handleAddAsync.bind(this)}>点击</button>
            </div>
        )
    }
    
}
const mapStateToProps=(state)=>({
    n:state.reducer.num
})
const mapDispatchToProps = (dispatch)=>({
    
    handleAddAsync(){
        dispatch(NUM_ADD_ACTION())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Num)