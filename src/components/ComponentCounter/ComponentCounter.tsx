import { useState } from "react"

export const ComponentCounter = () => {
    const [counter, setCounter] = useState<number>(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}