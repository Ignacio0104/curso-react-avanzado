import React, { useEffect, useRef, useState } from 'react'

//useBooleanHooks

const useBoolean = (initialValue)=>{
    const [value, setValue] = useState(initialValue);
    const updateValue = useRef({
        toogle: ()=>{
            setValue(oldValue => !oldValue)
        },
        on: ()=>setValue(true),
        off: ()=>setValue(false)
    })

    return [value/*,setValue*/,updateValue.current];
}

export default function EjemploUseBoolean() {

    //const [mostrar,setMostrar] = useBoolean();

   /* const mostrarTexto = ()=>{
        setMostrar(!mostrar)
    }*/

    const [lista, setLista] = useState([]);

    const [cargando, setCargando] = useBoolean(true);

    const [error, setError] = useBoolean(false);

    useEffect(() => {
      setCargando.on();
      fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then(res=>setLista(res.data))
      .catch(err=>{
        alert(`Error: ${err}`);
        setError.on();
      })
      .finally(setCargando.off())
    }, [])
    

  return (
    <div>
      <p>{cargando ? "Cargando..." : null}</p>
      <p>{error ? "Ha ocurrido un error!" : null}</p>   
      {lista.map((element)=>{
        return(
            <p>{element.email}</p>
        )
      })}
    </div>
  )
}
