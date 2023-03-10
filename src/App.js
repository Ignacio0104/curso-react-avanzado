import logo from './logo.svg';
import { useCallback, useEffect, useMemo, useState } from 'react';
import EjemploUseBoolean from './components/CustomHooks/EjemploUseBoolean';
import TaskList from './components/lists/TaskList';
import Settings from './components/settings/Settings';
import Contador from './components/EjercicioContador/contador';
import {motion ,AnimatePresence} from "framer-motion"

//Animate presence se usa porque un componente al no renderizard ya no aplica la animacion que le hayamos asignado

function App() {
  const [dark, setDark] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  useEffect(() => {
    try{
      const config = JSON.parse(localStorage.getItem("config"));
      setDark(config.theme);
    }catch(e){
      setDark(false)
    }

  }, []);

  const toggleDark = () => setDark(!dark);
  const toggleSettings = ()=> setShowSettings(!showSettings)
  return (
    <div className={`${dark ? "dark" : ""}`} style={{overflow:"hidden"}}>
    <div className={`h-screen p-4 flex-col ${dark? 'dark' : ''} 
    bg-gray-200 
    dark:bg-slate-800  //!El dark: pregunta si la clase es dark, y aplica el codigo acorde
    dark:text-gray-50
    transition-all duration-1000`}>
    <TaskList toggleSettings={toggleSettings} showSettings={showSettings}></TaskList>
    <AnimatePresence
    initial={false}
    mode="wait"
    onExitComplete={()=>null}>
    {showSettings &&
      <motion.div initial={{y:'100vh'}} animate={{y:"0"}} exit={{y:"100vh"}}>
        <Settings  toggleDark={toggleDark}></Settings>
      </motion.div> }
    </AnimatePresence>

    {/* <Contador></Contador> */}
   </div>
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
