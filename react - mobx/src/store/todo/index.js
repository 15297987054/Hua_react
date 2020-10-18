import {observable,action,computed,runInAction} from 'mobx'
import {movieApi} from '../../api'
class Todo{
    @observable val=''
    @observable list=[]
    @observable movieList=[]
    @action.bound handleInputChange(val){
        this.val = val.target.value
    }
    @action.bound handleListAdd(){
        this.list.push(this.val)
        this.val = ""
    }
    @computed get coutlen(){
        return this.list.length
    }
    @action.bound async handleMovieList(){
        let data = await movieApi()
        
        runInAction(()=>{
            this.movieList = data
            console.log(data);
        })
    }
}

export default new Todo()