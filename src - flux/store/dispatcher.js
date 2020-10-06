import {Dispatcher} from 'flux'
import store from './index'
const dispatcher = new Dispatcher()
dispatcher.register((action)=>{
    switch(action.type){
        case "ADD_NUM":
            store.handleAdd()
            break
    }
})
export default dispatcher