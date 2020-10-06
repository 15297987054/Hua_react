import React from 'react'
import {HashRouter as Router } from 'react-router-dom'
import routeEach from './utils/routeEach'
import {baseRoutes} from './router'
import Tabbar from './components/tabbar'
class App extends React.Component {
   
    render() {
        return (
           <Router>
                {routeEach(baseRoutes)}
                <Tabbar></Tabbar>
           </Router>
        )
    }

}

export default App