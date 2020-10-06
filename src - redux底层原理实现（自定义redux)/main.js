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

// let dom = <div clasName="demo">
//     <label htmlFor="user">1231</label>
// </div>











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
  *     在React中一切皆为组件
  *        类组件 函数组件 受控组件 非受控组件 UI组件 高阶组件
  *     高阶组件：
  *         高阶组件其实就是一个函数，它接收一个组件作为参数，返回一个相对性增强的组件
  *         作用：
  *                属性代理
  *                     比如a组件作为子组件在b组件中使用，而a组件又被高阶组件c处理了，那么b组件给a组件传递的属性（props）
  *                     在a组件中是拿不到的，只有在高阶组件c中才能拿到，如果要在a组件中取到，必须从c组件中传递给a
  *                反向继承
  *                     即高阶组件可以继承于你要处理的那个组件，如此，在高阶组件中可以调用继承的组件的的任何东西，包括state和函数
  * 
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
     /**
      *     context 的基本使用以及什么时候会用到context？
      * 
      *     1.通过react.createContext创建生产者和消费者组件
      *     2.通过globalContext.Provider来生产所需要的数据，注意当前生产者组件中有一个属性value，value的值就是生产的数据
      *     3.如果某些组件需要使用生产者生产的数据时，需要用消费者组件globalContext.Consumer进行包裹，
      *         注意的地方是：消费者组件内部必须是一个函数，函数必须返回一个jsx语法，另外这个函数的形参就是生产者的数据
      * 
      *     当需要跨组件传值的时候就需要用到context
      * 
      */
     /**
      * 
      *     1.安装：npm i react-router-dom -S
      *     
      *     react路由：
      *         1.路由形式：
      *             hash history
      *         HashRouter , BrowserRouter:是所有路由配置项的根组件，路由的配置项必须要在这两个组件的内部
      *         2.路由渲染方式
      *            Route
      *                 常用属性
      *                 path:用户请求路径
      *                 component:路由渲染组件
      *                 render:路由渲染的组件
      *                 exact:完全匹配
      *         3.路由跳转的方式
      *             a.a标签跳转
      *             b.Link组件
      *             c.NavLink组件
      *             d.编程式导航
      *             
      *             Link和NavLink的区别？
      *                 NavLink被选中时会有标识，比如会有active类
      *             Link和NavLink的一些属性?
      *                 activeClassName更改选中后的类名（默认时active）
      *                 activeStyle:设置被选中之后的一些样式
      *         4.Switch
      *             匹配路由时只匹配一个
      *         5.重定向
      *             Redirect重定向
      *               <Redirect from='/' to='/home' exact/>
      * 
      * 
      * 
      *     route中的component属性和render的属性的区别？
      *         相同点：都是用来渲染相对应的组件
      *         不同点：
      *                 component的值是组件的名称
      *                 render的值必须是一个函数，函数返回值是组件
      *                 render可以渲染H5标签，但是component的值只能是组件的名称
      *                 render渲染的方式可以进行组件传参，但是component不能
      *                 render内部可以做逻辑判断，但是component不行
      *                 render可以做路由嵌套，但是component不行
      *                 render渲染组件的时候，组件自身的props上不会有match、location、history。但是component渲染组件时
      *                     组件的props上默认会有这三个属性
      * 
      *     路由的嵌套：
      *         语法：
      *             <Route path="路径" render={()=>{
      *                 return (
      *                     <div>
      *                         <Route component={}/>
      *                         //二级路径
      *                         <Switch>
      *                             <Route path="路径" component={}/>
      *                              <Route path="路径" component={}/>
      *                         </Switch>
      *                     </div>                    
      *                 )
      *             }} />
      * 
      *     路由的传值：
      * 
      *         凡是通过component加载的组件，这个组件的props会有3个属性
      *         history
      *         location
      *         match:接收动态路由的参数
      *        
      *         动态路由
      *             在定义路由的时候通过/：属性的方式来定义属性，在路由跳转的时候通过/值的方式定义路由跳转的路径
      *             在组件内部通过this.props.match.params进行接收
      *         query传值
      *             1.在路由跳转的时候，通过query传值的方式进行路径的拼接
      *             2.在组件内部通过引入url模块，将this.props.location.search进行解析，解析完毕以后通过query的形式取到对应的值
      *         
      *         withRouter:
      *             高阶组件
      *             作用时可以将包裹的组件传入三个属性 match location history
      * 
      *         编程式导航：
      *             this.props.history.goBack
      *             this.props.history.goForward
      *             this.props.history.go
      *             this.props.history.push
      *             this.props.history.replace
      * 
      *         路由懒加载
      *             通过引入第三方模块：npm i react-loadable -S
      *             基本配置：
      * 
      *                 const 组件名称 = Loadable({
      *                     loader:()=>import('组件路径'),
      *                     loader:loading组件
      *                 })
      *             
      */    

      /**
       *  Fragment 
       *        react的内置组件
       *        用来当作容器使用，但是不会渲染到页面上
       *        import { Fragment } from 'react'
       */
      /**
       *    React中的css样式私有化
       *        缺点：不便于维护，需要一定的学习成本
       *    
       *      安装 npm i  styled-componnets -S
       * 
       *        优点：随机生成类名，保证样式私有化，保证多人写作中不会出现命名冲突
       * 
       * 
       */
      /**
       *    React中的前后端数据交互
       *        前后端数据交互方式：
       *            原声ajax
       *            jq的ajax
       *            axios
       *            fetch
       * 
       *    fetch:
       *        是新啊ES的语法进行实现的，而不是通过创建xml实现
       *        
       *        fetch属于window的属性（注意兼容性问题）
       *        基于promiseApi
       * 
       *        安装 npm i whatwg-fetch -S
       * 
       *        get请求
       *            fetch('/users/login?username=13')
       *                .then((res)=>res.json())
       *                .then(data=>{
       *                    console.log(data)
       *                })
       *        post请求
       *            fetch('/users/login',{
       *            credentials：include,
       *            methods:'post',
       *                headers:{},
       *                body:存放post请求的时候提交的数据
       *            }).then(()=>res.json)
       *            .then(data=>{
       *                console.log(data)
       *            })
       *            body请求数据的格式，必须是数据序列化的格式
       *            序列化需要使用qs模块，npm i qs -S
       *            eg: fetch('/mmdb/open/tg/pre.json',{
       *            credentials：include,
                    method:'post',
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body:qs.stringify({
                        utm_source: 'Baidu',
                        channel: 'Baidu__',
                        refer_page_id: 'c_dmLad',
                        redirectUrl: 'https%3A%2F%2Fdeeplink.maoyan.com%2Fmaoyan-app%2Fapp%3Fchannel%3Dmymovie1yuan-dy%26postAnalytics%3D%257B%2522utm_source%2522%253A%2522Baidu%2522%252C%2522channel%2522%253A%2522Baidu__%2522%252C%2522refer_page_id%2522%253A%2522c_dmLad%2522%257D'
                    })
                }).then(res=>res.json())
                    .then(data=>{
                        console.log(data,'post请求')
                    })

                fetch默认不会携带cookie,所以必须设置属性credentials：include

       *        注意：fetch中的第一个.then并不是成功的返回值，而是一个未处理的结果集，需要根据自身的情况返回相对应的解析结果
       *                一般情况下，我们只需要调用res.json即可（意思是返回json类型的数据),第二个.then才是最终的返回结果
       * 
       */
      /**
       *    flux
       *        公共状态管理
       * 
       *    flux分为哪几部分
       *        1.view  视图层
       *        2.action    动作
       *        3.dispatcher    派发器
       *        4.store   数据层
       *    安装flux npm i flux -S
       */
      /**
       *    redux
       *        1.为啥要学redux （flux弊端）
       *            ui组件 容器组件的拆分
       *            频繁引入store
       *            每个组件都需要监听
       *            无法管理多个store
       *    安装： npm i redux -S
       * 
       *   1.必须创建一个初始的state
       *   2.state数据只能读不能修改
       *   3.只能返回一个纯函数
       * 
       *   这个纯函数就是用来修改数据的，每次修改完数据，就会给当前reducer传递一个新的state
       * 
       */