import React from 'react' 
import { useState } from 'react';

const Todo = () => {

const localList = JSON.parse(localStorage.getItem('list'))

const [list , setList] = useState(localList || []); 

const [taskInput, setTaskInput] = useState('');

const addTask = (e) => {
    if(e) e.preventDefault();
    setList([...list, taskInput]);
    localStorage.setItem('list', JSON.stringify(list))
    setTaskInput('')
}; 

const clearTasks = (e) => {
    if(e) e.preventDefault();
    setList([]);
    localStorage.setItem('list',JSON.stringify([]));
}


return (
    <div>
        <ul>
            {list.map((task, index) =>
                <li key={index}>
                    {task}
                </li>
                )}
        </ul> 
        <form>
            <input type="text" value={taskInput}  onChange={e => setTaskInput(e.target.value)}/>
            <button onClick={(e) => addTask(e)}>Enviar</button>
            <button onClick={(e) => clearTasks(e)}>Borrar Tareas</button>
        </form>
    </div>
    )
}

export default Todo