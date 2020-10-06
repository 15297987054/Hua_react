import {
    Home,
    List,
    Mine,
    Order,
    Login,
    Now,
    Comming
} from '../page'
//路由配置表
export const TabBarRoutes = [
    {
        key: 1,
        path: '/home',
        name: '首页',
        icon: 'iconshouye-',
        component: Home,
        meta: {
            auth: false
        },
        children:[
            {
                path:'/home/now',
                component:Now,
                name:'正在热映'
            },
            {
                path:'/home/comming',
                component:Comming,
                name:'即将上映'
            }
        ]
    },
    {
        key: 2,
        path: '/list',
        name: '列表',
        icon: 'iconiconfront-',
        component: List,
        meta: {
            auth: false
        }
    },
    {
        key: 3,
        path: '/order',
        name: '订单',
        icon: 'icondianpu',
        component: Order,
        meta: {
            auth: true
        }
    },
    {
        key: 4,
        path: '/mine',
        name: '我的',
        icon: 'iconwode',
        component: Mine,
        meta: {
            auth: true
        }
    }
]

export const NoTabBarRoutes = [
    {
        key: 1,
        path: '/login',
        name: '登录',
        icon: '',
        component: Login,
        meta: {
            auth: false
        }
    }
]

export const baseRoutes = TabBarRoutes.concat(NoTabBarRoutes)
