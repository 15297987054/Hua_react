import React,{Component} from 'react'
import Three from './three'
import PropTypes from 'prop-types'
class One extends Component{
    render(){
        let {val} = this.props
        return (
            <div className="one">
                One
                <h2>接收到父组件的值：{val}</h2>
                <Three/>
            </div>
        )
    }
}
//定义外部数据默认值
One.defaultProps = {
    val:'默认值'
}
//定义外部数据类型
One.propTypes = {
    val:PropTypes.string
}
export default One