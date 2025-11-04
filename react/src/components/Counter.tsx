// // import {useState} from 'react'
// // const Counter = () => {

// //     const [count, setCount] = useState(0)
// //     return (
// //         <>
// //             <div>
// //                 <p>{count}</p>
// //                 <button onClick={() => setCount(count + 1)}>Increment</button>
// //                 <button onClick={() => setCount(count - 1)}>Decrement</button>
// //             </div>
// //         </>
// //     )
// // }

// // export default Counter


// import {useReducer} from 'react'

// export interface State {
//     count: number
// }

// export interface Action {
//     type: 'INCREMENT' | 'DECREMENT'
// }

// export const countReducer = (state: State, action: Action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {count: state.count + 1}
//         case 'DECREMENT':
//             return {count: state.count - 1}
//         default:
//             return state
//     }
// }


// export const initialState: State = {
//     count: 0
// }

// const Counter = () => {
//     const [state, dispatch] = useReducer(countReducer, initialState)

//     return (

//         <div>
//             <h1>Counter Code</h1>
//             <p>{state.count}</p>
//             <button>
//                 <span onClick={() => dispatch({type: 'INCREMENT'})}>Increment</span>
//             </button>
//             <button>
//                 <span onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</span>
//             </button>
//         </div>
//     )
// }

// export default Counter
