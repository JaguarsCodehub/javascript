// import {useState} from 'react'
// const Counter = () => {

import { useReducer } from 'react'

//     const [count, setCount] = useState(0)
//     return (
//         <>
//             <div>
//                 <p>{count}</p>
//                 <button onClick={() => setCount(count + 1)}>Increment</button>
//                 <button onClick={() => setCount(count - 1)}>Decrement</button>
//             </div>
//         </>
//     )
// }

// export default Counter

// import {useReducer} from 'react'

// export interface State {
//     count: number
// }

// export interface Action {
//     type: 'increment' | 'decrement'
// }

// export const initialState: State = {
//     count: 0
// }

// export const countReducer = (state: State, action: Action) => {
//     switch (action.type) {
//         case 'increment':
//             return {state: state.count + 1}
//         case 'decrement':
//             return {state: state.count - 1}
//         default:
//             return state
//     }
// }
// const Counter = () => {

//     const [state, dispatch] = useReducer(countReducer, initialState)

//     return (
//         <>
//         <div>
//             {state.count}
//             <button onClick={() => dispatch({type: 'increment'})} >Incremenet</button>
//             <button onClick={() => dispatch({type: 'decrement'})} >Decrement</button>
//         </div>
//         </>
//     )
// }

// export default Counter

interface State {
    count: number
}

interface Action {
    type: 'INCREMENT' | 'DECREMENT'
}

const initialState: State = {
    count: 0
}

export const countReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { state: state.count + 1}
        case 'DECREMENT':
            return { state: state.count - 1}
        default: 
            return state
    }
}

const Counter = () => {
    const [state, dispatch ] = useReducer(countReducer, initialState)
  return (
    <div>
        <h1>Counter</h1>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT"})} >Add</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>Delete</button>
    </div>
  )
}

export default Counter