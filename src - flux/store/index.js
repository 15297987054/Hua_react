import observer from '../observer'
const store = Object.assign(observer,{
    state:{
        n:10
    },
    getState(){
        return this.state
    },
    handleAdd(){
        this.state.n++
        this.$emit('handle')
    },
    handleUpdate(cd){
        this.$on('handle',cd)
    }
})
export default store