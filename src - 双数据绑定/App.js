import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            message: '123',
            radioValue: '男',
            checkBoxVal:[],
            selectVal:'德玛西亚'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeRadio = this.handleChangeRadio.bind(this)
        this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }
    render() {
        let { message, radioValue,checkBoxVal,selectVal } = this.state
        return (
            <div>
                <input onChange={this.handleChange} type="text" value={message} />
                <div>{message}</div>
                <hr />

                <label>
                    男：<input type="radio" onChange={this.handleChangeRadio} checked={radioValue == "男"} value="男" />
                </label>
                <label>
                    女：<input type="radio" onChange={this.handleChangeRadio} checked={radioValue == '女'} value="女" />
                </label>
                <p>您选择的爱好是：{radioValue}</p>
                <label>
                    抽烟：<input type="checkbox" onChange={this.handleChangeCheckBox} value="抽烟" />
                </label>
                <label>
                    喝酒：<input type="checkbox" onChange={this.handleChangeCheckBox} value="喝酒" />
                </label>
                <label>
                    烫头：<input type="checkbox" onChange={this.handleChangeCheckBox} value="烫头" />
                </label>
                <label>
                    大保健：<input type="checkbox" onChange={this.handleChangeCheckBox} value="大保健" />
                </label>
                <p>您选择的爱好是：</p>
                    <ul>
                        {
                            checkBoxVal.map((item,index)=>{
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                <hr/>
                <select onChange={this.handleSelectChange} value={selectVal}>
                        <option value="提莫队长">提莫队长</option>
                        <option value="德玛西亚">德玛西亚</option>
                        <option value="盲僧">盲僧</option>
                        <option value="蛮王">蛮王</option>
                </select>
                <p>您选择的英雄是：{selectVal}</p>
            </div>
        )
    }
    handleChange(e) {
        let value = e.target.value
        this.setState({
            message: value
        })
    }
    handleChangeRadio(e) {
        this.setState({
            radioValue: e.target.value
        })
    }
    handleSelectChange(e){
        this.setState({
            selectVal:e.target.value
        })
    }
    handleChangeCheckBox(e){
        let val = e.target.value
        let arr = this.state.checkBoxVal
        let flag = arr.includes(val)
        if(flag){
            let index = arr.indexOf(val)
            arr.splice(index,1)
        }else{
            arr.push(val)
        }
        this.setState({
            checkBoxVal:arr
        })
    }

}

export default App