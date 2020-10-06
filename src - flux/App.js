import React from 'react'
import store from './store'
import dispatcher from './store/dispatcher'
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            ...store.getState()
        }
        store.handleUpdate(this.handleUpdate.bind(this))
    }
    render() {
        let {n} = this.state
        return (
           <div>
            <h1>{n}</h1>
            <button onClick={this.handleAdd.bind(this)}>点击</button>
           </div>
        )
    }
    handleAdd(){
        let action = {
            type:'ADD_NUM'
        }
        dispatcher.dispatch(action)
    }
    handleUpdate(){
        this.setState(store.getState())
    }
}

export default App