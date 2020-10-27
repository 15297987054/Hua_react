import {observable,action,computed,autorun} from 'mobx'

class Num {
    @observable n = 10
    @action.bound handleAdd(){
        this.n++
        autorun(()=>{
            console.log('数据发生了改变');
        })
    }
    @computed get count(){
        return this.n+1;
    }
}



export default new Num()