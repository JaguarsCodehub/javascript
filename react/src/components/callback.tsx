import React, { useCallback, useState } from 'react'

const Button = React.memo(({onClick, text}) => {
    console.log("Button rendered")
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
})

const CallbackCOmponent = () => {

    const [count1, setCount1] = useState()
    const [count2, setCount2] = useState()

    const handleClick1 = useCallback(() => {
        setCount1(prev => prev + 1)
    }, [])
    const handleClick2 = useCallback(() => {
        setCount2(prev => prev + 1)
    }, [])
  return (
    <div>

        <p>Count 1: {count1}</p>
        <p>Count 2: {count2}</p>
        <Button onClick={handleClick1}>
            Increment Count 1
        </Button>
        <Button onClick={handleClick2}>
            Increment Count 2
        </Button>
    </div>
  )
}

export default CallbackCOmponent