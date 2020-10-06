import React from 'react'
import One from './one'
import store from './store'
import {NUM_ADD_ACTION} from './actions/actionCreator'
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            ...store.getState()
        }
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {n} = this.state
        return (
           <div>
            <One/>
            <h1>{n}</h1>
            <button onClick={this.handleAdd.bind(this)}>点击</button>
           </div>
        )
    }
    handleUpdate(){
        this.setState(store.getState())
    }
    handleAdd(){
        store.dispatch(NUM_ADD_ACTION(20))
    }
}

export default App