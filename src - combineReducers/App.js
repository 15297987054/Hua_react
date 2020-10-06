import React from 'react'
import Input from './components/input'
import List from './components/list'
import Num from './components/num'
class App extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
           <div>
            <Input/>
            <List/>
            <Num/>
           </div>
        )
    }
}

export default App