import logo from './logo.svg';
import './App.css';
import { useCallback, useMemo, useState } from 'react';
import EjemploUseBoolean from './components/CustomHooks/EjemploUseBoolean';
import TaskList from './components/lists/TaskList';
import Settings from './components/settings/Settings';
import Contador from './components/EjercicioContador/contador';


function App() {
  return (
    <div>
    <TaskList></TaskList>
    {/* <Settings></Settings> */}
    <Contador></Contador>
   </div>
  );
}

export default App;





//Ejemplo useMemo
/*

Ejemplo useMemo


let clicks =0;
let renders=0;

function App() {
  const names = [
    "Alice",
    "Bob"
  ]
  return (
    <GeneradorNombres names={names}></GeneradorNombres>
  );
}

export default App;

function GeneradorNombres (props){
  const {names} = props
  const [name, setName] = useState(names[0]);

  const getName= useCallback(()=>{
    clicks++
    const index = Math.floor(Math.random()*(names.length));
    setName(names[index])
  },[names])

  const clearName = useCallback(()=>{
    setName(null);
  },[])

  return(
    <div className='app'>
      <h1>Memorize de React con useMemo y useCallback</h1>
      {useMemo(()=>{
        renders++;
        console.log(`${clicks} clicks y ${renders} renders`);
        return(
          <>
            <h2>Nombre generado: {name ? name: "None"}</h2>
          </>
        )
      },[name])}
      <button onClick={getName}>Get name</button>
      <button onClick={clearName}>Delete name</button>
    </div>
  )
}*/
