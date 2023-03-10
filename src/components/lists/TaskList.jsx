import React, { useState } from 'react';
import useList from '../hooks/useList';
import { motion } from 'framer-motion';

const Tasklist = ({toggleSettings,showSettings}) => {
    const tasks = useList([]);
    const [newTask, setNewTask] = useState({task: "", completed: false});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(newTask.task=== "") return
        tasks.push(newTask);
        setNewTask({task: "", completed: false});
    };

    const handleInputChange = (event) => {
        setNewTask({...newTask, task: event.target.value});
    };

    return (
      <>
      <header className='flex justify-between'>
      <h1 
        className="text-3xl text-sky-700 font-semibold
        dark:text-sky-300">
          Task List hosted on firebase
        </h1>
        <button onClick={toggleSettings} className='btn'>{showSettings ? "Hide setting" : "Show settings"} </button>
      </header>

        <form className='my-4' onSubmit={handleSubmit}>
          <input 
          className='shadow py-1 px-2 rounded-lg outline-none 
          transition-all duration-300 focus:ring-2 mr-2
          dark:bg-slate-700' value={newTask.task} onChange={handleInputChange} placeholder="New Task" type="text" />
          <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}}
          className="btn" type="submit">Create Task</motion.button>
          <button
          className="btn" type="button" onClick={()=>tasks.clearList()}>Clear list</button>
          <button
         className="btn" type="button" onClick={()=>tasks.sortList()}>Sort list</button>
          <button
          className="btn" type="button" onClick={()=>tasks.invertList()}>Invert list</button>
        </form>
        { tasks.isEmpty()
            ? (<p>Task List is Empty</p>)
            : (
              <ul>
                {tasks.value.map((task, index) => (
                  <label >
                  <motion.li initial={{x:"90vw"}}  animate={{x:0}} key={index}>
                    <input
                      type="checkbox"
                      onClick={() => tasks.remove(index)}
                      checked={false}
                    />
                    <span style={{textDecoration: task.completed && "line-through" }} className='text-gray-800 ml-2 text-sm italic dark:text-gray-100'>{ task.task }</span>
                  </motion.li>
                  </label>
                        ))}
              </ul>
            )}

      </>
    );
};

export default Tasklist;
