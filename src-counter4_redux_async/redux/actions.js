import {INCREMENT, DECREMENT} from '../redux/action-types'
/*
包含所有 action creator
同步的action都返回一个对象
异步的action返回的是一个函数
 */
//增加
export const increment = (number) => ({type: INCREMENT, data: number})
// 减少
export const decrement = (number) => ({type: DECREMENT, data: number})

// 异步action
export const incrementAsync = (number) => {
  return dispatch => {
    // 异步的代码
    setTimeout(() => {
      // 1s之后才去分发一个增加的action
      dispatch(increment(number))
    }, 1000)
  }
}
