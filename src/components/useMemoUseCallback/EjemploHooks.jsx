import React, { useCallback, useMemo, useState } from 'react'

const MiComponente=()=>{
    const [name, setName] = useState("");

    const names = [
        "Martn",
        "Eric"
    ]

    const getName = useCallback(
        ()=>{
            const random = Math.floor(Math.random()*(names.length-1));
            return names[random]
        }
    ,[name])

    const clearName = useCallback(()=>{setName("")},[]);
    
    return(
        <h1>Mi componente</h1>
    )
}
/*
const Memoization = useMemo(()=>MiComponente,[a,b])//List de dependecias
Use memo se utiliza para funciones de creacion de nuevos componentes
const callBack = useCallback(()=>MiComponente,[a,b])
Para funciones en linea dentro de un component. Se ejecuta cuando cambia algo de las dependencias
*/