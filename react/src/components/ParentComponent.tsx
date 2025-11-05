// import { useState } from 'react'
// import ChildComponent from './ChildComponent'

import { useState } from 'react'
import ChildComponent from './ChildComponent'

// const ParentComponent = () => {

//     const [parentValue, setParentValue] = useState("")

//     const handleChildUpdate = (newValue: string) => {
//         setParentValue(newValue)
//     }
//   return (
//     <div>
//         <h1>Parent Component</h1>
//         <p>Current Parent Value: {parentValue}</p>
//         <ChildComponent onUpdate={handleChildUpdate}/>
//     </div>
//   )
// }

// export default ParentComponent

import React from 'react'

const ParentComponent = () => {

  const [parentValue, setParentValue] = useState("")
  const handleChildUpdate = (newValue: string) => {
    setParentValue(newValue)
  }
  return (
    <div>
      <h1>Parent Component</h1>
      <p>{parentValue}</p>
      <ChildComponent onUpdate={handleChildUpdate}/>
    </div>
  )
}

export default ParentComponent