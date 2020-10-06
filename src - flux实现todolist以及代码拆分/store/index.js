
import observer from '../observer'

const store = Object.assign(observer,{
    state:{
        inputVal:'',
        list:[]
    },
    getState(){
        return this.state
    },
    handleUpdate(cd){
        this.$on('handle',cd)
    },
    handleChange(value){
        this.state.inputVal = value
        this.$emit('handle')
    },
    handleAddList(){
        this.state.list.push(this.state.inputVal)
        this.state.inputVal=''
        this.$emit('handle')
    },
    handleDelLsit(val){
        this.state.list.splice(val,1)
        this.$emit('handle')
    }
})

export default store