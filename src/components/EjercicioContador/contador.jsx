import React from 'react'
import useCounter from '../hooks/useCounter'

const Contador = () => {
    const counter = useCounter(0);

    const increment = ()=>{
      try{
        counter.incrementValue()
      }catch(err){
        alert(err)
      }
    }
    const decrement = ()=>{
      try{
        counter.decrementValue()
      }catch(err){
        alert(err)
      }
    }

  return (
    <div>
      <h2>{`Contador: ${counter.value}`}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>counter.resetValue()}>Reset</button>
    </div>
  )
}

export default Contador
