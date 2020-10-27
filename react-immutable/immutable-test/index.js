const Immutable = require('immutable')

/*
    Map:===>js中的对象
        只会把第一层的基本数据类型转换为immutable对象
        
        
    List：===>js中的数组

    fromJS:将所有的对象/数据都转化为immutable  深转换（比较耗费性能）
    
        let map = Immutable.fromJS({
            id:1,
            username:'阿里巴巴',
            obj:{

            }
        })

    toJS：将所有的immutable对象转换为js对象 深转换

    toObject:只会将第一层对象中的数据转换为immutable对象

    toArray:只会将第一层immutable对象中的数据转换成js数组
*/

//如何判断两个对象中的数据是否相同？

let dataOne = Immutable.fromJS({
    id:12,
    username:"alibb",
    arr:[12,3,4,5,1],
    obj:{
        name:'adbfl'
    }
})

let dataTwo = Immutable.fromJS({
    id:12,
    username:"alibb",
    arr:[12,3,4,54,1],
    obj:{
        name:'adbfl'
    }
})

console.log(Immutable.is(dataOne,dataTwo));











let map = Immutable.Map({
    id:1,
    username:'阿里巴巴',
    obj:{

    }
})

let map2 = Immutable.Map({
    id:123,
    a:2321,
    b:123
})
// let newMap = map.merge(map2)
// console.log(newMap);
// 增 set

// let newmap = map.set("num",19)
// let newmap = map.setIn((["obj",'num']),19)
// console.log(newmap);

//删 delete

// let newmap = map.delete('id')
// let newmap = map.deleteIn(['id'])
// console.log(newmap);

//改 
// let newmap = map.update('id',(params)=>params+1)
// let newmap = map.updateIn(['id'],(params)=>1999)
// console.log(newmap);

// 查
// let n = map.get('id')
// let n = map.getIn(['id'])

// console.log(n);

let list = Immutable.List([1,2,3,5])
let list1 = Immutable.List([1,2,3,5])

let newlist = list.concat(list)
// console.log(newlist);
//增
// let newlist = list.push(19)
// console.log(newlist);

//删
// let newlist = list.splice(1,1)
// console.log(newlist);

//改
// let newlist = list.splice(1,0,199)
// console.log(newlist);

//查
// let n = list.get(0)
// console.log(n);