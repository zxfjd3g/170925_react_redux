import React, {Component} from 'react'
import * as actions from '../redux/actions'

export default class App extends Component {

  increment = () => {
    // 1. 得到选择增加数量
    const number = this.select.value * 1
    // 2. 调用store的方法更新状态
    this.props.store.dispatch(actions.increment(number))
  }

  decrement = () => {
    // 1. 得到选择增加数量
    const number = this.select.value * 1
    // 2. 调用store的方法更新状态
    this.props.store.dispatch(actions.decrement(number))
  }

  incrementIfOdd = () => {
    // 1. 得到选择增加数量
    const number = this.select.value * 1
    // 2. 得到原本的count状态
    const count = this.props.store.getState()
    //判断, 满足条件才更新状态
    if (count % 2 === 1) {
      // 3. 调用store的方法更新状态
      this.props.store.dispatch(actions.increment(number))
    }
  }

  incrementAsync = () => {
    // 1. 得到选择增加数量
    const number = this.select.value * 1
    // 启动延时定时器
    setTimeout(() => {
      // 3. 调用store的方法更新状态
      this.props.store.dispatch(actions.increment(number))
    }, 1000)
  }

  render() {
    const count = this.props.store.getState()
    // debugger
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select => this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>
          &nbsp;
          <button onClick={this.decrement}>-</button>
          &nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>
          &nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
          &nbsp;
        </div>
      </div>
    )
  }
}