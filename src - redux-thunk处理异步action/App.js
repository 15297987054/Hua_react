import React from 'react'
import Num from './components/num'
class App extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
           <div>
            <Num/>
           </div>
        )
    }
}

export default App