import React from 'react'
import One from './component/one'
import GlobalContext from './globalContext'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            n:10
        }
    }
    render() {
        return (
            <GlobalContext.Provider
                value={{
                    username:'张三',
                    age:19
                }}
            >
                <One/>
            </GlobalContext.Provider>
        )
    }

}

export default App