import React, { memo, useState } from 'react'

const Ejemplo = () => {

    const [name, setName] = useState("")

    const names = [
        "martin",
        "Eric"
    ]

    const getName = ()=>{
        const random = Math.floor(Math.random()*(names.length-1));
        return names[random]
    }

    const clearName = ()=>{
        setName("")
    }

    const obtainName = ()=>{
        setName(getName())
    }
  
    

  return (
    <div>
      <h1>Ejemplo de uso de MEMO</h1>
      <NombresAleatorios name={name} clearName={clearName}/>
      <button onClick={obtainName}>Generar nombre</button>
    </div>
  )
}

export default Ejemplo

export const NameComponent= (props)=>{
    console.log("Renderizando de nuevo")
    return (
        <div>
            <h2>{props.name}</h2>
            <button onClick={props.clearName}> Borrar nombre
            </button>
        </div>
    )
}

const namesAreEqual = (prevProps,nextProps)=>{
    return prevProps.name !== nextProps.name
}   

export const NombresAleatorios = memo(NameComponent,namesAreEqual);
