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

    /**
     * 组件传值
     *      父传子
     *          当组件在父组件种当标签使用的时候，通过绑定自定义属性进行传值，接受的时候在子组件内部通过this.props接收
     *          凡是外部的数据都用props接收
     * 
     *          定义外部数据的默认值 
     *              组件.defaultProps = {
     *                  key:val
     *              }
     *          定义外部数据的类型
     *              1.npm i prop-types -S
     *              2.引入 import PropTypes from 'prop-types'
     *              3.使用
     *                  组件.propTypes = {
     *                      key:类型
     *                  }
     *      子传父
     *          当子组件在父组件中当标签使用的时候，给当前子组件绑定一个自定义属性，值为用来接收参数的函数，在子组件的内部，通过
     *          触发this.props.属性名称来进行传值
     *      非父子
     *          
     *          1.封装发布订阅模式
     *          2.context
     *          3.flux
     *          4.redux
     *          5.mobx
     */

     /**
      * react生命周期
      * 
      *     constructor:初始化
      *         当前生命周期用来做组件的初始化工作，在使用当前组建的时候，必须调用super方法，否则this指向会发生错误
      *         当前生命周期可以通过this.state来定义当前组建所需要的一些状态
      *         在constructor中默认访问不到this.props的属性，如果需要访问，则需要在super和constructor中传入props参数
      *     componentWillMount:挂在前
      *         在当前生命周期中，可以访问到外部传递过来的数据（也就是说可以访问到this.props的属性）
      *         可以进行数据最后的修改
      *         尽量不要在componentWillMount中使用this.setState,因为componentWillMount执行完毕后就会执行render
      *     render:渲染（会执行多次）
      *         当前生命周期是将数据和模板进行结合，当数据和模板结合完毕以后，会在内存中保存一份，当数据下一次发生改变的时候
      *         会将内存中的虚拟dom和现在要修改的虚拟dom进行对比，这种对比的方式叫做diff算法
      *         
      *         注意：在当前生命周期中千万不要调用this.setState
      *     componentDidMount:挂载后
      *         1.在当前生命周期中可以通过this.refs访问到真实的dom结构
      *         2.在当前生命周期中可以前后端数据的交互
      *         3.在当前生命周期中可以做插件的（比如echart图表）实例化
      * 
      *             关于refs
      *                1.this.refs.属性
      *                2.ref={(params)=>this.dom = params}
      *     componentWillUnmount:卸载
      *         当前生命周期可以用来做事件的解绑或者内存的释放
      *     componentWillReceiveProps:(会执行多次)
      *         当前生命周期是当this.props数据发生了改变后，就会执行
      *     shouldComponentUpdate:(会执行多次)
      *         1.当this.props或this.state发生改变的时候，当前生命周期就会执行
      *         2.当前生命周期返回一个bool值，如果返回true则执行下面的生命周期，反之则不执行
      *         3.当前生命周期可以用来做性能优化
      *         4.当前生命周期会有两个参数，一个是新的props,一个是新的state
      *         5.通过this.state this.props可以访问旧的state和props，二者可进行对比来决定render函数是否要执行
      *         6.当前生命周期决定的是render函数是否执行，而不是数据是否更改
      *     componentWillUpdate:(会执行多次)
      *         1.可以对更新的数据进行最后的修改
      *         2.当前生命名周期会接收两个参数，一个是新的props，一个是新的state
      *         3.千万不要在当前生命周期中使用this.setState，如果要修改数据，则通过newState/newProps进行数据的修改
      *     componentDidUpdate:(会执行多次)
      *         1.获取数据更新后最新的dom结构
      *         2.当前生命周期中会有两个参数，一个是旧的props一个是旧的state
      *     
      * 
      * 总结：
      *     组件第一次渲染时会执行哪些生命周期？
      *         constructor
      *         componentWillMount
      *         render
      *         componentDidMount
      *     哪些生命周期会执行一次，哪些执行多次？
      *       一次：
      *         constructor
      *         componentWillMount
      *         componentDidMount
      *         componentWillUnmount
      *       多次：
      *         componentWillRecevieProps
      *         shouldComponentUpdate
      *         componentWillUpdate
      *         render
      *         componentDidUpdate
      *     render函数什么时候会执行？
      *         当this.props/this.state发生改变的时候
      *     当this.state/this.props发生改变的时候，会执行哪些生命周期？
      *         this.state改变
      *             shouldComponentUpdate
      *             componentWillUpdate
      *             render
      *             componentDidUpdate
      *         this.props改变
      *             componentWillRecevieProps
      *             shouldComponentUpdate
      *             componentWillUpdate
      *             render
      *             componentDidUpdate
      */