// redux - monostore
import { configureStore, createAction } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
}

// state = null
// action = {
//   type: "increment",
// }
// reducer это функция, которая занимается изменением состояния на основе action -> получает действие и значение, потом возвращает новое состояние меняя его иммютабельно
// при первом открытии приложения state(предыдущее состояние) равен null
// чтобы не передавать null в reducer, мы передаем по умолчанию initialState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      }
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      }
    case "greet":
      console.log(action);

      console.log(`Hello, ${action.payload}`)
      return state
    default:
      return state
  }
}

export const GreetAction = createAction("greet")
// export const GreetAction = (username) => {
//   return {
//     type: "greet",
//     payload: username,
//   }
// }

export const store = configureStore({
  reducer
})

// console.log(store.getState())
// store.subscribe(() => {
//   console.log("State changed:", store.getState())
// })
// store.dispatch({
//   type: "increment",
// })
// store.dispatch({
//   type: "greet",
//   payload: "John",
// })
