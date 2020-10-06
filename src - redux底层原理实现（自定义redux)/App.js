import React from 'react'
import store from './store'
import {NUM_ADD_ACTION} from './action/actionCreator'
class App extends React.Component {
    constructor(){
        super()
       this.state={
           ...store.getState()
       }
       store.subscribe(this.handleUpdate.bind(this))
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
        store.dispatch(NUM_ADD_ACTION)
    }
    handleUpdate(){
        this.setState(store.getState())
    }
}

export default App