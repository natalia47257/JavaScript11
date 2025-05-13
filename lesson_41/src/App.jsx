import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { DecrementAction, GreetAction, IncrementAction } from './store.js'

function App() {
  console.log(`App render`)
  const counter = useSelector((state) => state.count)
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')

  return (
    <>
      <button onClick={
        () => dispatch(IncrementAction())
      }>
        Increment
      </button>
      <button onClick={
        () => dispatch(DecrementAction())
      }>
        Decrement
      </button>

      <input
        type="text"
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={
        // () => dispatch({
        //   type: 'greet',
        //   payload: username
        // })
        () => dispatch(GreetAction(username))
      }>
        Greet
      </button>
      <p>count is {counter}</p>
    </>
  )
}

export default App
