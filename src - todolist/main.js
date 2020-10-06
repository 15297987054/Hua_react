import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

// let dom = <h2>19291</h2>



 // react 模拟vue常用指令
// v-text
//  let message = 12312
//  let dom = <h2>{message}</h2>

// v-html
// let message = <p>123123</p>
// let dom = <h2>{message}</h2>

// v-if
// let flag = false
// let dom = <div>{flag?<h2>你好</h2>:<div>不好</div>}</div>

// v-show
// let flag = true
// let dom = (
//     <div>
//         <h2 style={{display:flag?'block':'none'}}>你好</h2>
//         <h2 style={{display:flag?'none':''}}>不好</h2>
//     </div>
// )

// v-bind
// let title = '百度图片'
// let url = 'https://www.baidu.com/img/flexible/logo/pc/result.png'
// let dom = (
//     <div>
//         <img src={url} alt={title}/>
//     </div>
// )

let dom = <div clasName="demo">
    <label htmlFor="user">1231</label>
</div>











 ReactDom.render(
    <App/>,
    document.getElementById('root'),
    ()=>{console.log('渲染成功');}
) 

/**
 * 三个参数
 *  参数1：需要渲染的组件或元素
 *  参数2：将渲染好的元素/组件挂载到哪个位置
 *  参数3：回调
 */

/**
 * jsx语法中需要注意的地方
 * 
 *  1.定义类名的时候不允许用class 必须用className
 *  2.定义label的时候不想允许书写for 必须使用htmlFor
 */

 /**
  *  组件
  *     1.React.Component:component是所有组件的父类
  *     创建组件是必须要继承于这个父类进行创建
  * 
  *     render:render 是一个生命周期，用来渲染虚拟dom，render函数中必须返回一个jsx语法
  *     constructor:constructor是一个生命周期，其中的this.state用来存放当前组件所需要的一些状态
  *                 注意：constructor中必须要写super()
  * 
  *     当需要修改组件中的状态时，必须通过this.setState进行修改
  *         参数1：是一个对象/函数，函数也是返回一个对象，key值是state中的状态值 value是要修改的最新的值
  *         参数2：是一个回调函数，因为setState是异步的，可以在这个回调函数中获取到修改成功之后的值
  * 
  *             参数1为对象
  *             this.setState({
                    arr:newArr
                },()=>{
                    console.log(this.state.arr);
                })
                
                参数1为函数
                this.setState((state)=>{
                    return {
                        arr:newArr
                    }
                })
  */

  /**
   * 事件的优化
   *    需要传参时用方法2，不需要传值时用方法1。因为方法1中，事件在contructor中，只会加载一次。
   *           放法2中，每次更新dom事件都会被重新注册，耗费性能
   *    
   *    1. this.handleAlert = this.handleAlert.bind(this)
   *    
   *    2.<li onClick={this.handleAlert.bind(this,index)} key={index}>{item}</li>
   *    
   */

   /**
    * 双数据绑定
    * 
    *   只要给form表单绑定了一个value，那就必须给当前表单元素绑定一个onChange方法
    *   如果只是单纯的一个数据绑定，也可以只设置defaultValue即可
    * 
    *   如果给表单绑定了一个状态之后，那么当前表单就会变成一个受控组件
    */