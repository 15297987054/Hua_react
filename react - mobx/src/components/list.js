import React,{useState,useEffect} from 'react'

function List(){
    let [n,setn] = useState(10)
    let [username,setUsername] = useState('奥蕾莉亚')
    var handleModifyNUm=()=>{
        ++n
        setn(n)
    }
    /*
        useState:定义当前组件所需要的一些状态
            返回值是一个数组
                第一个值是定义的状态
                第二个值是修改状态的函数
            useState可以多次定义
        useEffect：让函数组件模拟类组件的一些副作用（功能）
            模拟的生命周期：
                componentDidMount(只需要模拟componentDidMount时，将useEffect的第二个参数设置成一个固定值[]即可)
                componentDidUpdate(不写第二个参数即可)
                componentWillUnmount(在useEffect中返回一个函数，这个函数可以监听到组建的卸载事件)
    */ 
    useEffect(()=>{
        console.log(123);
        //这个返回的函数可以监听到当前组件的卸载
        return ()=>{
            console.log('组件卸载了');
        }
    },[])

    return(
        <div>
            <h1>{n}</h1>
            <button onClick={handleModifyNUm}>点击</button>
            <h4>{username}</h4>
            <button onClick={()=>setUsername(username+'123213')}>点击</button>
        </div>
    )
}

export default List