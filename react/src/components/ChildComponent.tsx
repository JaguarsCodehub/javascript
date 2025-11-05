
// const ChildComponent = ({onUpdate}) => {

//     const handleClick = () => {
//         const newValue = "Hello"
//         onUpdate(newValue)
//     }
//   return (
//     <div>
//         <h1>Child Component</h1>
//         <button onClick={handleClick}>
//             CLick to update Parent Value
//         </button>
//     </div>
//   )
// }

// export default ChildComponent

import React from 'react'

const ChildComponent = ({onUpdate}) => {

  const handleClick = () => {
    const newValue = "Hello from child"
    onUpdate(newValue)
  }
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleClick}>
        Click to update Parent Value
      </button>
    </div>
  )
}

export default ChildComponent