import React, { Children } from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h1>组件插槽</h1>
        {this.props.children}
        <ChildernCom>
          <h1 data-position="header">这是放置到头部的内容</h1>
          <h2 data-position="main">这是中部</h2>
          <h3 data-position="foot">这是尾部</h3>
        </ChildernCom>
      </div>
    )
  }
}

class RootCom extends React.Component{
  constructor(props){
    super(props)
    this.state={
      arr:[1,2,3]
    }
  }
  render(){
    return (
      <ParentCom>
    <h1 data-name='a' data-index={this.state.arr[1]}>子组件</h1>
  </ParentCom>
    )
  }
}

class ChildernCom extends React.Component{
  render(){
    let headerCom,mainCom,footCom;
    this.props.children.forEach((item,index)=>{
      if(item.props['data-position']==='header'){
        headerCom=item
      }else if(item.props['data-position']==='main'){
        mainCom = item
      }else{
        footCom = item
      }
    })
    return (
      <div>
        <div className="header">
          {headerCom}
        </div>
        <div className="main">
          {mainCom}
        </div>
        <div className="foot">
          {footCom}
        </div>
      </div>
    )
  }
}
ReactDOM.render(<RootCom/>,
  document.getElementById('root'))
