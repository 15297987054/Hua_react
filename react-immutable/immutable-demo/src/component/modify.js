import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import {CHANGE_MODIFY_ACTION,LIST_UPDATE} from '../actions/tab'
class Modify extends Component {
    render() {
        let {modifyData}   = this.props     
        return (
            <div>
                <label>姓名：
            <input type="text" value={modifyData.name} onChange={this.props.handleModifychange.bind(this,1)} />
                </label>
                <br />
                <label>年龄：
            <input type="text" value = {modifyData.age} onChange={this.props.handleModifychange.bind(this,2)} />
                </label>
                <br />
                <label>签名：
            <input type="text" value = {modifyData.sign} onChange={this.props.handleModifychange.bind(this,3)} />
                </label>
                <br />
                <button onClick={this.props.hanldeUpdate.bind(this)}>修改</button>
                <button>取消</button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    modifyData:state.getIn(['tab','modifyData'])
})
const mapDispatchToProps = (dispatch)=>({
    handleModifychange(type,e){
        dispatch(CHANGE_MODIFY_ACTION(type,e.target.value))
    },
    hanldeUpdate(){
        dispatch(LIST_UPDATE())
        this.props.handleToggle(false)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Modify)