import React from 'react'
import Header from './components/header'
import {fetch as fetchPro} from 'whatwg-fetch'
import qs from 'qs'
class App extends React.Component {
   
    render() {
        return (
           <div>
            
            <Header/>
           </div>
        )
    }
    componentDidMount(){
        fetchPro('/ajax/movieOnInfoList?token=&optimus_uuid=BCD56C20055311EBB3058BF48379091D0F24AD4F2EF94ABDB763BCEB801EB455&optimus_risk_level=71&optimus_code=10',{credentials:'include'})
        .then(res=>{
           return res.json()
        }).then(data=>{console.log(data,'get请求')})
        fetchPro('/mmdb/open/tg/pre.json',{
            credentials:'include',
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
    }

}

export default App