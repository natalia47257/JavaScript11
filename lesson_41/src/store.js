// redux - monostore
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

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
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1,
//       }
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - 1,
//       }
//     case "greet":
//       console.log(action);

//       console.log(`Hello, ${action.payload}`)
//       return state
//     default:
//       return state
//   }
// }
export const IncrementAction = createAction("increment")
export const DecrementAction = createAction("decrement")
export const GreetAction = createAction("greet")

const reducer = createReducer(initialState, (builder) => { // immer
  builder
    .addCase(IncrementAction, (state) => {
      state.count += 1
    })
    .addCase(DecrementAction, (state) => {
      state.count -= 1
    })
    .addCase(GreetAction, (state, action) => {
      console.log(action)

      console.log(`Hello, ${action.payload}`)
      return state
    })
})

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

// 0x000xabcdef
// const state = {
//   profile: {
//     name: "John",
//     age: 30,
//     adress: {
//       city: "New York",
//       country: "USA",
//     },
//   },
//   settings: {
//     theme: "dark",
//     notifications: true,
//     privacy: {
//       profileVisibility: "public",
//       searchEngineIndexing: false,
//     },
//   },
// }
// state.profile.adress.country = "Germany"
// 0x000xabcdef
// {
//   profile: { // 0x000xabsdfghj
//     name: "John",
//     age: 30,
//     adress: {
//       city: "New York",
//       country: "Germany",
//     },
//   },
//   settings: { // 0x1564asaas
//     theme: "dark",
//     notifications: true,
//     privacy: {
//       profileVisibility: "public",
//       searchEngineIndexing: false,
//     },
//   },
// }

// 0x000xafdg
// state = {
//   ...state, // settings: 0x1564asaas
//   profile: { // 0x000xabsdf15515
//     ...state.profile,
//     adress: {
//       ...state.profile.adress,
//       country: "Germany",
//     },
//   },
// }

// let obj = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 3,
//     e: 4,
//   },
//   f: {
//     g: 5,
//     h: 6,
//   }
// }
// obj.c.e = 5
// // ... => spread оператор
// obj = {
//   ...obj,
//   c: {
//     ...obj.c,
//     e: 5,
//   }
// }
