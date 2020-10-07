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
    })

    return (
        <CongressContext.Provider value={
            {senators, reps}
        }>
            {props.children}
        </CongressContext.Provider>
    )
}

export const useCongressContext = () => useContext(CongressContext)