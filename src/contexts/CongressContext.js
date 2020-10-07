import React, { useContext, createContext, useState, useEffect } from 'react'

const CongressContext = createContext({
    senators: [],
    reps: [],
})

export const CongressContextProvider = (props) => {
    const [senators, setSenators] = useState([])
    const [reps, setReps] = useState([])

    useEffect(() => {
        // fetch data and set the state with it
        // response.data
        // setSenators(response.data.results[0].members)
        // setReps(response.data.results[0].members)
    }, [])

    return (
        <CongressContext.Provider value={
            {senators, reps}
        }>
            {props.children}
        </CongressContext.Provider>
    )
}

export const useCongressContext = () => useContext(CongressContext)