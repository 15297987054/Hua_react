import loadable from 'react-loadable'

import Loading from '../components/loading'
const Home=loadable({
    loader:()=>import('./home'),
    loading:Loading
})
const List=loadable({
    loader:()=>import('./list'),
    loading:Loading
})
const Order=loadable({
    loader:()=>import('./order'),
    loading:Loading
})
const Mine=loadable({
    loader:()=>import('./mine'),
    loading:Loading
})
const Login=loadable({
    loader:()=>import('./login'),
    loading:Loading
})
const Now = loadable({
    loader:()=>import('../components/now'),
    loading:Loading
})
const Comming = loadable({
    loader:()=>import('../components/comming'),
    loading:Loading
})
export {
    Home,
    List,
    Order,
    Login,
    Mine,
    Now,
    Comming
}