import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {


    const [state, setState] = useState(false)


    useEffect(() => {
        console.log("useEffect montado")
        return () => {
            console.log("useEffect desmontado")
        }
    }, [])

    useEffect(() => {
        console.log(state)
    }, [state])
    return (
        <div>
            <p>{state ? "true" : "false"}</p>
            <h2>Use Effect</h2>
            <button onClick={() => setState(!state)}>Toggle</button>
            <p>State: {state.toString()}</p>
        </div>
    )
}